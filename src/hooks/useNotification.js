import { useSnackbar } from 'notistack';

const useNotification = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (variant = 'success', message = '') => {
    const key = enqueueSnackbar(message, {
      variant,
      key: Date.now(),
      onClick: () => {
        closeSnackbar(key);
      },
    });
  };
};

export default useNotification;
