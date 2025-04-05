// Socket
import {io} from "socket.io-client"

const useSocket = () => {
const socket = io("http://localhost:3001", {
    query: {
        userId: sessionStorage.getItem("userId"),
    },
})
return socket

}

export default useSocket