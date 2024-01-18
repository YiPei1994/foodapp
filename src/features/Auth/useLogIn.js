import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLogIn() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => logIn(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(['user', user.user]);
      navigate('/orders', { replace: true });
    },
    onError: (err) => {
      toast.error('Provided email or password are incorrect.');
    },
  });
  return { login, isLogging };
}
