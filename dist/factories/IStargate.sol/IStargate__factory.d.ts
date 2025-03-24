import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStargate, IStargateInterface } from "../../IStargate.sol/IStargate";
export declare class IStargate__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "quoteOFT";
        readonly inputs: readonly [{
            readonly name: "_sendParam";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.SendParam";
            readonly components: readonly [{
                readonly name: "dstEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "to";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "extraOptions";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "composeMsg";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "oftCmd";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.OFTLimit";
            readonly components: readonly [{
                readonly name: "minAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "oftFeeDetails";
            readonly type: "tuple[]";
            readonly internalType: "struct IStargate.OFTFeeDetail[]";
            readonly components: readonly [{
                readonly name: "feeAmountLD";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "description";
                readonly type: "string";
                readonly internalType: "string";
            }];
        }, {
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.OFTReceipt";
            readonly components: readonly [{
                readonly name: "amountSentLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "quoteSend";
        readonly inputs: readonly [{
            readonly name: "_sendParam";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.SendParam";
            readonly components: readonly [{
                readonly name: "dstEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "to";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "extraOptions";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "composeMsg";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "oftCmd";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_payInLzToken";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.MessagingFee";
            readonly components: readonly [{
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lzTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "sendToken";
        readonly inputs: readonly [{
            readonly name: "_sendParam";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.SendParam";
            readonly components: readonly [{
                readonly name: "dstEid";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "to";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "extraOptions";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "composeMsg";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "oftCmd";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "_fee";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.MessagingFee";
            readonly components: readonly [{
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lzTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "_refundAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "msgReceipt";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.MessagingReceipt";
            readonly components: readonly [{
                readonly name: "guid";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "fee";
                readonly type: "tuple";
                readonly internalType: "struct IStargate.MessagingFee";
                readonly components: readonly [{
                    readonly name: "nativeFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "lzTokenFee";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }, {
            readonly name: "oftReceipt";
            readonly type: "tuple";
            readonly internalType: "struct IStargate.OFTReceipt";
            readonly components: readonly [{
                readonly name: "amountSentLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountReceivedLD";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }, {
            readonly name: "ticket";
            readonly type: "tuple";
            readonly internalType: "struct Ticket";
            readonly components: readonly [{
                readonly name: "ticketId";
                readonly type: "uint72";
                readonly internalType: "uint72";
            }, {
                readonly name: "passengerBytes";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "payable";
    }];
    static createInterface(): IStargateInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStargate;
}
