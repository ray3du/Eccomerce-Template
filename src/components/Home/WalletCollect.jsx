import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAddress, setWalletConnected } from "../../actions/actions"

const WalletConnect = () => {

    const [walletConnected, setWalletConnected] = useState(false)
    const dispatch = useDispatch()

    const connectWallet = async () => {
        try {
            if(window.ethereum !== undefined){
                const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
                const account = accounts[0]
                dispatch(addAddress(account))
                setWalletConnected(true)
            }

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        connectWallet()
    }, [dispatch, walletConnected])

    return (
        <div>
            { walletConnected ? 
                <div className="flex flex-row border-4 border-gray-400 rounded-full items-center px-2 py-1">
                    <div className="rounded-full bg-green-200 w-[10px] h-[10px] mr-2">
                    </div>
                    <p className="hidden sm:block text-md">Connected</p>               
                </div>
                :
                <button className="flex flex-row border-4 border-gray-400 rounded-full items-center px-2 py-1 hover:cursor-pointer hover:opacity-75" onClick={connectWallet}>
                    <div className="rounded-full bg-red-500 w-[10px] h-[10px] mr-2">
                    </div>
                    <p className="hidden sm:block text-md">Not Connected</p>               
                </button>
            }
        </div>
    )
}

export default WalletConnect