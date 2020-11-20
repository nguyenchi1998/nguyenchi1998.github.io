import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from '@material-ui/core';
import Faker from 'faker';
import SendIcon from '@material-ui/icons/Send';
import { useQuery } from 'react-query';
import commentAPI from 'services/comment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cardMedia: {
    height: 400,
  },
  bg: {
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: '0px 14px',
  },
}));

const CommentBox = ({ productId }) => {
  const classes = useStyles();

  const { data, isLoading } = useQuery(
    ['showComments', productId],
    commentAPI.fetchComment,
  );

  if (isLoading) {
    return null;
  }

  return (
    <Grid item xs={12}>
      <Box
        marginTop={2}
        maxHeight={400}
        style={{ overflowY: data.length ? 'scroll' : 'unset' }}
      >
        {data.length ? (
          <List>
            {data.map((comment) => (
              <div key={comment}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt="avatar" src={Faker.image.imageUrl()} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography className={classes.fonts}>
                        {`${Faker.name.firstName()} ${Faker.name.lastName()}`}
                      </Typography>
                    }
                    secondary={
                      <>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                          color="textPrimary"
                          align="justify"
                        />
                        {`${Faker.lorem.paragraph()}`}
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        ) : (
          <Typography variant="body2" color="textPrimary" align="center">
            No Comment
          </Typography>
        )}
      </Box>
      <Box marginTop={2}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          style={{ display: 'flex' }}
        >
          <TextField
            label="Comment"
            fullWidth
            margin="normal"
            size="medium"
            variant="outlined"
          />
          <Button>
            <SendIcon />
          </Button>
        </form>
      </Box>
    </Grid>
  );
};
export default CommentBox;
