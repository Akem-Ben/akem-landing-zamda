import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUsers, handlePost } from "./api";

export const useGetAllDatabaseWards = () => {
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
    // ...options,
  });
};

export function usePostUsers() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updateData: FormData) => handlePost(updateData),
    onSuccess: async () => {
      queryClient.invalidateQueries({
        queryKey: ["allUsers"],
      });
    },
    onError: (error) => {
      console.error("Error sending request:", error);
    },
  });
}
