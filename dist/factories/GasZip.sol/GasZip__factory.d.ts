import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GasZip, GasZipInterface } from "../../GasZip.sol/GasZip";
declare type GasZipConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZip__factory extends ContractFactory {
    constructor(...args: GasZipConstructorParams);
    deploy(_owner: PromiseOrValue<string>, _uniswapRouter: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZip>;
    getDeployTransaction(_owner: PromiseOrValue<string>, _uniswapRouter: PromiseOrValue<string>, _gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZip;
    connect(signer: Signer): GasZip__factory;
    static readonly bytecode = "0x60e060405260006080523480156200001657600080fd5b506040516200192438038062001924833981016040819052620000399162000082565b600080546001600160a01b0319166001600160a01b0394851617905590821660a0521660c052620000cc565b80516001600160a01b03811681146200007d57600080fd5b919050565b6000806000606084860312156200009857600080fd5b620000a38462000065565b9250620000b36020850162000065565b9150620000c36040850162000065565b90509250925092565b60805160a05160c051611813620001116000396000818161025c015281816103e101526106d9015260006101db015260008181610108015261066601526118136000f3fe6080604052600436106100c75760003560e01c8063735de9f711610074578063ba956b9a1161004e578063ba956b9a1461024a578063e30c39781461027e578063f2fde38b146102ab57600080fd5b8063735de9f7146101c95780638da5cb5b146101fd57806397b307491461022a57600080fd5b80635b458dc8116100a55780635b458dc8146101545780635bc35ae8146101945780637200b829146101b457600080fd5b806323452b9c146100cc57806344ef2640146100e357806358fa63ca146100f6575b600080fd5b3480156100d857600080fd5b506100e16102cb565b005b6100e16100f136600461146b565b610395565b34801561010257600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561016057600080fd5b5061018461016f3660046114a0565b60026020526000908152604090205460ff1681565b604051901515815260200161014b565b3480156101a057600080fd5b506100e16101af3660046114cc565b6104c7565b3480156101c057600080fd5b506100e161056e565b3480156101d557600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561020957600080fd5b5060005461012a9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023657600080fd5b506100e1610245366004611503565b610654565b34801561025657600080fd5b5061012a7f000000000000000000000000000000000000000000000000000000000000000081565b34801561028a57600080fd5b5060015461012a9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102b757600080fd5b506100e16102c63660046114a0565b61073f565b60005473ffffffffffffffffffffffffffffffffffffffff16331461031c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661036b576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff82811660248301527f00000000000000000000000000000000000000000000000000000000000000001690636e553f659085906044016000604051808303818588803b15801561042657600080fd5b505af115801561043a573d6000803e3d6000fd5b5050604051600093503392504791508381818185875af1925050503d8060008114610481576040519150601f19603f3d011682016040523d82523d6000602084013e610486565b606091505b50509050806104c1576040517f90b8ec1800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610518576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260026020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163381146105c0576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b61065f60008461089d565b600061068a7f0000000000000000000000000000000000000000000000000000000000000000610bd2565b6040517f6e553f650000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff84811660248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690636e553f659083906044016000604051808303818588803b15801561072057600080fd5b505af1158015610734573d6000803e3d6000fd5b505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610790576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166107dd576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361082c576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b6108b36108ad60208301836114a0565b3b151590565b6108e9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610929576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061095861093e60608501604086016114a0565b73ffffffffffffffffffffffffffffffffffffffff161590565b610963576000610969565b82608001355b9050600061098561098060608601604087016114a0565b610bd2565b9050600061099c61098060808701606088016114a0565b9050826000036109d3576109d36109b960608701604088016114a0565b6109c960408801602089016114a0565b8760800135610c8b565b8460800135821015610a23576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044015b60405180910390fd5b600080610a3360208801886114a0565b73ffffffffffffffffffffffffffffffffffffffff1685610a5760a08a018a611556565b604051610a659291906115c2565b60006040518083038185875af1925050503d8060008114610aa2576040519150601f19603f3d011682016040523d82523d6000602084013e610aa7565b606091505b509150915081610af2576000610abc82610dd3565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a91906115f6565b6000610b0761098060808a0160608b016114a0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610b3860208b018b6114a0565b610b4860608c0160408d016114a0565b610b5860808d0160608e016114a0565b8c60800135898711610b6a5786610b74565b610b748a88611676565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610c83576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610c5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7e9190611689565b610c85565b475b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316610cab57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cf8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d919190611689565b1015610dce57610da383836000610e51565b610dce83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610e51565b505050565b6060604482511015610e1857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000610e346004808551610e2c9190611676565b85919061100a565b905080806020019051810190610e4a91906116d1565b9392505050565b801580610ef157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610ecb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eef9190611689565b155b610f7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a1a565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052610dce908490611124565b60608161101881601f611791565b1015611050576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61105a8284611791565b84511015611094576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156110b3576040519150600082526020820160405261111b565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156110ec5780518352602092830192016110d4565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6000611186826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166112339092919063ffffffff16565b90508051600014806111a75750808060200190518101906111a791906117a4565b610dce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a1a565b6060611242848460008561124a565b949350505050565b6060824710156112dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a1a565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161130591906117c1565b60006040518083038185875af1925050503d8060008114611342576040519150601f19603f3d011682016040523d82523d6000602084013e611347565b606091505b509150915061135887838387611363565b979650505050505050565b606083156113f95782516000036113f25773ffffffffffffffffffffffffffffffffffffffff85163b6113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a1a565b5081611242565b611242838381511561140e5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1a91906115f6565b803573ffffffffffffffffffffffffffffffffffffffff8116811461146657600080fd5b919050565b60008060006060848603121561148057600080fd5b833592506020840135915061149760408501611442565b90509250925092565b6000602082840312156114b257600080fd5b610e4a82611442565b80151581146114c957600080fd5b50565b600080604083850312156114df57600080fd5b6114e883611442565b915060208301356114f8816114bb565b809150509250929050565b60008060006060848603121561151857600080fd5b833567ffffffffffffffff81111561152f57600080fd5b840160e0818703121561154157600080fd5b92506020840135915061149760408501611442565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261158b57600080fd5b83018035915067ffffffffffffffff8211156115a657600080fd5b6020019150368190038213156115bb57600080fd5b9250929050565b8183823760009101908152919050565b60005b838110156115ed5781810151838201526020016115d5565b50506000910152565b60208152600082518060208401526116158160408501602087016115d2565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c8557610c85611647565b60006020828403121561169b57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156116e357600080fd5b815167ffffffffffffffff808211156116fb57600080fd5b818401915084601f83011261170f57600080fd5b815181811115611721576117216116a2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611767576117676116a2565b8160405282815287602084870101111561178057600080fd5b6113588360208301602088016115d2565b80820180821115610c8557610c85611647565b6000602082840312156117b657600080fd5b8151610e4a816114bb565b600082516117d38184602087016115d2565b919091019291505056fea2646970667358221220f4801a768de69d569a363ace019d16f08cfa16d07bd741185228d3ff2ee7c72064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_uniswapRouter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ZERO";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowToken";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowedInboundTokens";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "uniswapRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISwapRouter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "zip";
        readonly inputs: readonly [{
            readonly name: "amountToZip";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "zipERC20";
        readonly inputs: readonly [{
            readonly name: "_swap";
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
        }, {
            readonly name: "destinationChain";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "recipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "GasZipFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SwapFailed";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "TransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZip;
}
export {};
