import { useMutation } from "@tanstack/react-query";
import { getLogin } from "../api/auth";
import { GetLoginProps } from "../api/auth";

export function useGetLogin(body: GetLoginProps) {
    return useMutation({
        mutationFn: async () => await getLogin(body),
    });
}