import { useContext } from 'react'
import { TransactionContext } from '../context/TransactionContext'
import { SiEthereum } from "react-icons/si"
import { BsInfoCircle } from 'react-icons/bs'

import Loader from './Loader'
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"

const ServiceItem = ({ text, classProps }) => (
    <div className={`${commonStyles} ${classProps}`}>
        {text}
    </div>
)

const Input = ({ placeholder, name, value, type, handleChange }) => (
    <input
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        step="0.0001"
        min="0"
        onChange={(e) => handleChange(e, name)}
        className="w-full p-2 border-2 my-2 border-gray-700 rounded-lg outline-none white-glassmorphism bg-transparent text-white text-sm"
    />
)

const Welcome = () => {

    const { connectWallet, currentAccount, formData, sendTransaction, handleChange } = useContext(TransactionContext)
    
    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData

        if (!addressTo || !amount || !keyword || !message) return
        
        sendTransaction()
    }

    return (
        <div className="flex w-full items-center justify-center">
            <div className="flex mf:flex-row flex-col justify-between items-start mf:p-20 py-12 px-4">
                <div className="flex flex-1 flex-col justify-start mf:mr-10">
                    <h1 className="text-3xl md:text-5xl text-white text-gradient py-1">
                        Send Crypto <br/> Across the World
                    </h1>
                    <p className="text-base md:w-9/12 w-11/12 text-left mt-5 font-light text-white">
                        Explore the world of crypto. Sell and Buy cryptocurrencies along the world without fees
                    </p>
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-10 bg-[#2952e3] p-3 cursor-pointer text-white text-base font-semibold rounded-full hover:bg-[#2546bd]"
                    >
                        Connect Wallet
                    </button>
                    <div class="grid md:grid-cols-3 grid-cols-2 w-full mt-10">
                        <ServiceItem text="Reliability" classProps="rounded-tl-2xl" />
                        <ServiceItem text="Security" />
                        <ServiceItem text="Ethereum" classProps="sm:rounded-tr-2xl" />
                        <ServiceItem text="Web 3.0" classProps="sm:rounded-bl-2xl" />
                        <ServiceItem text="Low Fees" />
                        <ServiceItem text="Blockchain" classProps="rounded-br-2xl" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center flex-1 justify-start mb-5 w-full mf:mt-0 mt-10">
                <div className="p-3 flex flex-col items-start justify-end rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
                    <div className="flex flex-col justify-between h-full w-full">
                        <div className="flex justify-between items-start">
                            <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#ffff" />
                            </div>
                            <BsInfoCircle fontSize={21} color="#ffff" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-light">
                                Address: 0x544848.....258dedfr
                            </p>
                            <p className="text-white text-lg font-semibold mt-1">
                                Ethereum
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                    <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange}/>
                    <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange}/>
                    <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange}/>
                    <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange}/>

                    <div className="h-[1px] w-full bg-gray-400 my-2" />

                    {false ? (
                        <Loader />
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit()}
                            className="w-full my-2 p-2 cursor-pointer border-2 border-[#3d4f7c] hover:bg-[#3d4f7c] text-white rounded-full"    
                        >
                            Send Now
                        </button>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Welcome