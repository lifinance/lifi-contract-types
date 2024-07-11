import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapper, GenericSwapperInterface } from "../GenericSwapper";
declare type GenericSwapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapper__factory extends ContractFactory {
    constructor(...args: GenericSwapperConstructorParams);
    deploy(_dexAggregatorAddress: PromiseOrValue<string>, _feeCollectorAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapper>;
    getDeployTransaction(_dexAggregatorAddress: PromiseOrValue<string>, _feeCollectorAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapper;
    connect(signer: Signer): GenericSwapper__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200196438038062001964833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a05161184362000121600039600081816101bd0152818161028b0152818161082401528181610b2f01528181610bed0152610c2f01526000818160b80152818161021701528181610448015281816105d6015281816107b0015281816109a301528181610a6501528181610aa70152610c9201526118436000f3fe60806040526004361061009a5760003560e01c80638a65a65111610069578063d38a88b91161004e578063d38a88b91461018b578063f108e225146101ab578063f1a74432146101df57600080fd5b80638a65a65114610158578063bf6e6df41461017857600080fd5b80632382962f146100a657806335c6a5fd146101035780634e123c0614610125578063621ff6cf1461014557600080fd5b366100a157005b600080fd5b3480156100b257600080fd5b506100da7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561010f57600080fd5b5061012361011e3660046112bf565b6101ff565b005b34801561013157600080fd5b50610123610140366004611450565b61040d565b6101236101533660046114d1565b610439565b34801561016457600080fd5b506101236101733660046114d1565b6105c7565b6101236101863660046112bf565b610798565b34801561019757600080fd5b506101236101a6366004611520565b61092b565b3480156101b757600080fd5b506100da7f000000000000000000000000000000000000000000000000000000000000000081565b3480156101eb57600080fd5b506101236101fa3660046114d1565b610c83565b6102098183611582565b60005b8151811015610336577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1682828151811061025e5761025e611693565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16141580156102f757507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168282815181106102d2576102d2611693565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1614155b1561032e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60010161020c565b50368383600081811061034b5761034b611693565b905060200281019061035d91906116c2565b905061036f60e0820160c08301611700565b156103ac576103ac3330608084013561038e6060860160408701611722565b73ffffffffffffffffffffffffffffffffffffffff16929190610e4b565b60006103b9858589610ea8565b905085811015610404576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101879052602481018290526044015b60405180910390fd5b50505050505050565b610417838361092b565b8051602082016000808383305af4915081905061043357600080fd5b50505050565b6104466020820182611722565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146104cb576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000806104db6020850185611722565b73ffffffffffffffffffffffffffffffffffffffff16346104ff60a087018761173f565b60405161050d9291906117a4565b60006040518083038185875af1925050503d806000811461054a576040519150601f19603f3d011682016040523d82523d6000602084013e61054f565b606091505b509150915081610562576105628161106d565b60008180602001905181019061057891906117b4565b9050858110156105be576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101879052602481018290526044016103fb565b61040487611077565b6105d46020820182611722565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610659576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061066b6060840160408501611722565b905061069373ffffffffffffffffffffffffffffffffffffffff821633306080870135610e4b565b6000806106a36020860186611722565b73ffffffffffffffffffffffffffffffffffffffff166106c660a087018761173f565b6040516106d49291906117a4565b6000604051808303816000865af19150503d8060008114610711576040519150601f19603f3d011682016040523d82523d6000602084013e610716565b606091505b509150915081610729576107298161106d565b60008180602001905181019061073f91906117b4565b905086811015610785576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101889052602481018290526044016103fb565b61078e88611077565b5050505050505050565b6107a28183611582565b60005b81518110156108cf577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168282815181106107f7576107f7611693565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff161415801561089057507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1682828151811061086b5761086b611693565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1614155b156108c7576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001016107a5565b5060006108dd848488610ea8565b905084811015610923576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044016103fb565b505050505050565b60008060005b83811015610c7c5784848281811061094b5761094b611693565b90506020020160208101906109609190611722565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301529193509083169063dd62ed3e90604401602060405180830381865afa1580156109f6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1a91906117b4565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8314610aec578215610a8b57610a8b73ffffffffffffffffffffffffffffffffffffffff83167f0000000000000000000000000000000000000000000000000000000000000000600061111e565b610aec73ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61111e565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015283169063dd62ed3e90604401602060405180830381865afa158015610b7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba291906117b4565b92507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8314610c74578215610c1357610c1373ffffffffffffffffffffffffffffffffffffffff83167f0000000000000000000000000000000000000000000000000000000000000000600061111e565b610c7473ffffffffffffffffffffffffffffffffffffffff83167f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61111e565b600101610931565b5050505050565b610c906020820182611722565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d15576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610d276060840160408501611722565b9050610d4f73ffffffffffffffffffffffffffffffffffffffff821633306080870135610e4b565b600080610d5f6020860186611722565b73ffffffffffffffffffffffffffffffffffffffff16610d8260a087018761173f565b604051610d909291906117a4565b6000604051808303816000865af19150503d8060008114610dcd576040519150601f19603f3d011682016040523d82523d6000602084013e610dd2565b606091505b509150915081610de557610de58161106d565b600081806020019051810190610dfb91906117b4565b905086811015610e41576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101889052602481018290526044016103fb565b61078e848961116d565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d156001600051141716610e9a57637939f4246000526004601cfd5b600060605260405250505050565b6000806000366000606060005b8881101561106057898982818110610ecf57610ecf611693565b9050602002810190610ee191906116c2565b9350610ef36060850160408601611722565b9550610f056080850160608601611722565b9450610f146020850185611722565b73ffffffffffffffffffffffffffffffffffffffff16610f488773ffffffffffffffffffffffffffffffffffffffff161590565b610f53576000610f59565b84608001355b610f6660a087018761173f565b604051610f749291906117a4565b60006040518083038185875af1925050503d8060008114610fb1576040519150601f19603f3d011682016040523d82523d6000602084013e610fb6565b606091505b50909350915082610fca57610fca8261106d565b610fd560018a6117cd565b8103610ff25781806020019051810190610fef91906117b4565b96505b8473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146110585773ffffffffffffffffffffffffffffffffffffffff861661104e5761104988611077565b611058565b611058868961116d565b600101610eb5565b5050505050509392505050565b8051602082018181fd5b47801561111a5760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146110d8576040519150601f19603f3d011682016040523d82523d6000602084013e6110dd565b606091505b5050905080611118576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b5050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d15600160005114171661116357633e3f8f736000526004601cfd5b6000603452505050565b73ffffffffffffffffffffffffffffffffffffffff82161561111a5760006111ab73ffffffffffffffffffffffffffffffffffffffff8416306111d4565b905080156111185761111873ffffffffffffffffffffffffffffffffffffffff84168383611209565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611163576390b8ec186000526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8116811461127057600080fd5b50565b60008083601f84011261128557600080fd5b50813567ffffffffffffffff81111561129d57600080fd5b6020830191508360208260051b85010111156112b857600080fd5b9250929050565b600080600080606085870312156112d557600080fd5b84356112e08161124e565b935060208501359250604085013567ffffffffffffffff81111561130357600080fd5b61130f87828801611273565b95989497509550505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561136d5761136d61131b565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156113ba576113ba61131b565b604052919050565b600082601f8301126113d357600080fd5b813567ffffffffffffffff8111156113ed576113ed61131b565b61141e60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611373565b81815284602083860101111561143357600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006040848603121561146557600080fd5b833567ffffffffffffffff8082111561147d57600080fd5b61148987838801611273565b909550935060208601359150808211156114a257600080fd5b506114af868287016113c2565b9150509250925092565b600060e082840312156114cb57600080fd5b50919050565b6000806000606084860312156114e657600080fd5b83356114f18161124e565b925060208401359150604084013567ffffffffffffffff81111561151457600080fd5b6114af868287016114b9565b6000806020838503121561153357600080fd5b823567ffffffffffffffff81111561154a57600080fd5b61155685828601611273565b90969095509350505050565b803561156d8161124e565b919050565b8035801515811461156d57600080fd5b600067ffffffffffffffff8084111561159d5761159d61131b565b8360051b60206115ae818301611373565b8681529185019181810190368411156115c657600080fd5b865b84811015611687578035868111156115e05760008081fd5b880160e03682900312156115f45760008081fd5b6115fc61134a565b61160582611562565b8152611612868301611562565b868201526040611623818401611562565b908201526060611634838201611562565b908201526080828101359082015260a080830135898111156116565760008081fd5b611662368286016113c2565b82840152505060c0611675818401611572565b908201528452509183019183016115c8565b50979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126116f657600080fd5b9190910192915050565b60006020828403121561171257600080fd5b61171b82611572565b9392505050565b60006020828403121561173457600080fd5b813561171b8161124e565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261177457600080fd5b83018035915067ffffffffffffffff82111561178f57600080fd5b6020019150368190038213156112b857600080fd5b8183823760009101908152919050565b6000602082840312156117c657600080fd5b5051919050565b81810381811115611807577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220d98bc5dd8df0709be3ad037b4bddb90f4d84f7789c2261ea461235f8c524b92b64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_dexAggregatorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_feeCollectorAddress";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "dexAggregatorAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeCollectorAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForTokens";
        readonly inputs: readonly [{
            readonly name: "_tokensToBeApproved";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForTokensAndSwap";
        readonly inputs: readonly [{
            readonly name: "_tokensToBeApproved";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "_swapCallData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensMultipleV3ERC20ToAny";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensMultipleV3NativeToERC20";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensSingleV3ERC20ToERC20";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensSingleV3ERC20ToNative";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensSingleV3NativeToERC20";
        readonly inputs: readonly [{
            readonly name: "_receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_minAmountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_swapData";
            readonly type: "tuple";
            readonly internalType: "struct LibSwap.SwapData";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): GenericSwapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapper;
}
export {};
