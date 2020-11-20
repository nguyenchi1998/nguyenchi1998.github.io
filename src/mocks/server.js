import { createServer, } from "miragejs"
import faker from 'faker';
import { get, set } from "utils/storage";

let data = []
if (get('products')) {
    data = JSON.parse(get('products'));
} else {
    for (let i = 0; i < 100; i++) {
        data.push({
            id: i,
            name: `Product ${i}`,
            price: parseInt(faker.commerce.price(), 10),
            description: faker.lorem.paragraphs(),
            image: faker.image.imageUrl(),
        });
    }
    set('products', JSON.stringify(data))
}

export default function () {
    createServer({
        routes() {
            this.get("/api/profile", () => ({
                data: {
                    'last_name': 'a',
                    'first_name': 'a',
                    'avatar': 'a',
                },
            }))

            this.get("/api/all/:page", (schema, request) => {
                const sizePage = 12;
                let { page } = request.params
                const chunkedArr = [];
                const copied = [...data];
                const numOfChild = Math.ceil(copied.length / sizePage); // Round up to the nearest integer
                for (let i = 0; i < numOfChild; i++) {
                    chunkedArr.push(copied.splice(0, sizePage));
                }

                return {
                    currentPage: page,
                    nextPage: ++page,
                    lastPage: page === 0 ? 0 : --page,
                    data: chunkedArr[page],
                    total: data, totalPage: numOfChild,
                }
            })

            this.get("/api/product/:id", (schema, request) => {
                const { id } = request.params
                const product = data.find(el => el.id === parseInt(id, 10));
                return product;
            })

            this.get("/api/comment/:productId", () => {
                return JSON.parse(get('comments')) || [];
            })

            this.post("/api/comment/:productId", (schema, request) => {
                const oldComment = JSON.parse(get('products')) || [];
                set('products', JSON.stringify(...oldComment, { ...JSON.parse(request.requestBody) }))
                return { ...JSON.parse(request.requestBody) }
            })
        },
    })
}