import startServer from "./startServer";


const index = async () => {
    await startServer().catch(() => console.log("Failed to start sever"));
} 

index();