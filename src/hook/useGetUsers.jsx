import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/get-user";

export default function useGetUsers() {

    return useQuery({
        queryKey: ["users"],
        queryFn: () => fetchUsers()
    });
};
