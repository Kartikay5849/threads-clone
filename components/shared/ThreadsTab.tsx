import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

interface Props{
    currentUserId:string;
    accountId:string;
    accountType:string;
}

const ThreadsTab=async({currentUserId ,accountId,accountType}:Props)=>{
    let results=await fetchUserPosts(accountId);
    if(!results) redirect('/')
    return (
        <section>
            ThreadsTab
        </section>
    )
}
export default ThreadsTab;