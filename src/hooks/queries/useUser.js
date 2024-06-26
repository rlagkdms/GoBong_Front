import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/queries/getuser";
import { useContext } from "react";
import { JoinContext } from "../../pages/Join/JoinProvider";
export function useUser() {
  const { userId } = useContext(JoinContext);
  return useQuery({
    queryKey: getUser.getKey(userId),
    queryFn: getUser,
  });
}
