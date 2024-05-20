import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GenericSwapFacetV3, GenericSwapFacetV3Interface } from "../GenericSwapFacetV3";
declare type GenericSwapFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GenericSwapFacetV3__factory extends ContractFactory {
    constructor(...args: GenericSwapFacetV3ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GenericSwapFacetV3>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GenericSwapFacetV3;
    connect(signer: Signer): GenericSwapFacetV3__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50611fa7806100206000396000f3fe60806040526004361061005a5760003560e01c80634666fc80116100435780634666fc8014610087578063733214a31461009a578063af7060fd146100ad57600080fd5b80630395f7261461005f5780632b13944314610074575b600080fd5b61007261006d366004611994565b6100c0565b005b610072610082366004611994565b6100ca565b610072610095366004611a85565b6100f2565b6100726100a8366004611a85565b6102fd565b6100726100bb366004611a85565b6104ea565b6100ca82826108d4565b6100d682828b87610963565b6100e7898989898989898989610f1f565b505050505050505050565b6100fc818461110d565b600061010e6080830160608401611b47565b905060006101226060840160408501611b47565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610192573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b69190611b64565b905084811015610201576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b61022273ffffffffffffffffffffffffffffffffffffffff8416878361147a565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102566020880188611b47565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b6040516102e799989796959493929190611bc6565b60405180910390a2505050505050505050505050565b610307818461110d565b478281101561034c576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101849052602481018290526044016101f8565b60008473ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103a6576040519150601f19603f3d011682016040523d82523d6000602084013e6103ab565b606091505b50509050806103e6576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006103f86080850160608601611b47565b9050600061040c6060860160408701611b47565b905060808501357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388d6104426020890189611b47565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281861690830152851660608201526080810183905260a081018790524260c082015260e00160405180910390a18c7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378d8d8d8d8d888a898e6040516104d399989796959493929190611bc6565b60405180910390a250505050505050505050505050565b60006104f96020830183611b47565b90506105498173ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156105ce57506105ce61056060a0840184611c31565b61056f91600491600091611c96565b61057891611cc0565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610604576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff83163461062c60a0870187611c31565b60405161063a929190611d08565b60006040518083038185875af1925050503d8060008114610677576040519150601f19603f3d011682016040523d82523d6000602084013e61067c565b606091505b5091509150816106c757600061069182611533565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f89190611d3c565b60006106d96080860160608701611b47565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610749573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061076d9190611b64565b9050868110156107b3576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101889052602481018290526044016101f8565b6107d473ffffffffffffffffffffffffffffffffffffffff8316898361147a565b60006107e66060880160408901611b47565b90506000876080013590507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388f888487858842604051610873979695949392919096875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385166040870152919093166060850152608084019290925260a083019190915260c082015260e00190565b60405180910390a18e7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378f8f8f8f8f888b898c6040516108bb99989796959493929190611bc6565b60405180910390a2505050505050505050505050505050565b8060005b8181101561095d57368484838181106108f3576108f3611d8d565b90506020028101906109059190611dbc565b905061091760e0820160c08301611dfa565b1561095457610954333060808401356109366060860160408701611b47565b73ffffffffffffffffffffffffffffffffffffffff169291906115b1565b506001016108d8565b50505050565b8260005b81811015610f17573686868381811061098257610982611d8d565b90506020028101906109949190611dbc565b905060006109a86060830160408401611b47565b9050610a046109ba6020840184611b47565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610a1d5750610a1b61056060a0840184611c31565b155b15610a54576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a616020830183611b47565b73ffffffffffffffffffffffffffffffffffffffff16610a876040840160208501611b47565b73ffffffffffffffffffffffffffffffffffffffff1614158015610abb5750610ab96109ba6040840160208501611b47565b155b15610af2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b21610b076060850160408601611b47565b73ffffffffffffffffffffffffffffffffffffffff161590565b905080610c7e57600073ffffffffffffffffffffffffffffffffffffffff831663dd62ed3e30610b576040880160208901611b47565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610bc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610beb9190611b64565b90508360800135811015610c7c57610c2b610c0c6040860160208701611b47565b73ffffffffffffffffffffffffffffffffffffffff8516906000611677565b610c7c610c3e6040860160208701611b47565b73ffffffffffffffffffffffffffffffffffffffff8516907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611677565b505b600080610c8e6020860186611b47565b73ffffffffffffffffffffffffffffffffffffffff1683610cb0576000610cb6565b85608001355b610cc360a0880188611c31565b604051610cd1929190611d08565b60006040518083038185875af1925050503d8060008114610d0e576040519150601f19603f3d011682016040523d82523d6000602084013e610d13565b606091505b509150915081610d5957610d2681611533565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f89190611d3c565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610d886020880188611b47565b610d986060890160408a01611b47565b610da860808a0160608b01611b47565b896080013588610e5757610dc260808c0160608d01611b47565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610e2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e529190611b64565b610e59565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1610ebc6080860160608701611b47565b73ffffffffffffffffffffffffffffffffffffffff16610ee26060870160408801611b47565b73ffffffffffffffffffffffffffffffffffffffff1614610f0757610f078489611730565b8560010195505050505050610967565b505050505050565b60008282610f2e600182611e4b565b818110610f3d57610f3d611d8d565b9050602002810190610f4f9190611dbc565b610f60906080810190606001611b47565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff49190611b64565b90508481101561103a576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044016101f8565b61105b73ffffffffffffffffffffffffffffffffffffffff8316878361147a565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061109557611095611d8d565b90506020028101906110a79190611dbc565b6110b8906060810190604001611b47565b898c8c60008181106110cc576110cc611d8d565b90506020028101906110de9190611dbc565b608001358a6040516110f899989796959493929190611bc6565b60405180910390a25050505050505050505050565b600061111f6060840160408501611b47565b9050608083013561114873ffffffffffffffffffffffffffffffffffffffff83163330846115b1565b60006111576020860186611b47565b9050600061116b6040870160208801611b47565b905036600061117d60a0890189611c31565b915091506111cf8473ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111e757506111e761056f600460008486611c96565b61121d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561129e575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b156112d5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919088169063dd62ed3e90604401602060405180830381865afa15801561134b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136f9190611b64565b9050858110156113e25780156113a1576113a173ffffffffffffffffffffffffffffffffffffffff8816856000611677565b6113e273ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611677565b6000808673ffffffffffffffffffffffffffffffffffffffff16858560405161140c929190611d08565b6000604051808303816000865af19150503d8060008114611449576040519150601f19603f3d011682016040523d82523d6000602084013e61144e565b606091505b50915091508161146357600061069182611533565b61146d898b611730565b5050505050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061095d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016101f8565b606060448251101561157857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611594600480855161158c9190611e4b565b85919061180c565b9050808060200190518101906115aa9190611e93565b9392505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611670576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c454400000000000000000000000060448201526064016101f8565b5050505050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d116001600051141617169150508061095d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c454400000000000000000000000000000000000060448201526064016101f8565b73ffffffffffffffffffffffffffffffffffffffff821615611808576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156117b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dd9190611b64565b905080156118065761180673ffffffffffffffffffffffffffffffffffffffff8416838361147a565b505b5050565b60608161181a81601f611f5e565b1015611852576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61185c8284611f5e565b84511015611896576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156118b5576040519150600082526020820160405261191d565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156118ee5780518352602092830192016118d6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f84011261193857600080fd5b50813567ffffffffffffffff81111561195057600080fd5b60208301915083602082850101111561196857600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461199157600080fd5b50565b600080600080600080600080600060c08a8c0312156119b257600080fd5b8935985060208a013567ffffffffffffffff808211156119d157600080fd5b6119dd8d838e01611926565b909a50985060408c01359150808211156119f657600080fd5b611a028d838e01611926565b909850965060608c01359150611a178261196f565b90945060808b0135935060a08b01359080821115611a3457600080fd5b818c0191508c601f830112611a4857600080fd5b813581811115611a5757600080fd5b8d60208260051b8501011115611a6c57600080fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060c0898b031215611aa157600080fd5b88359750602089013567ffffffffffffffff80821115611ac057600080fd5b611acc8c838d01611926565b909950975060408b0135915080821115611ae557600080fd5b611af18c838d01611926565b909750955060608b01359150611b068261196f565b90935060808a0135925060a08a01359080821115611b2357600080fd5b50890160e0818c031215611b3657600080fd5b809150509295985092959890939650565b600060208284031215611b5957600080fd5b81356115aa8161196f565b600060208284031215611b7657600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611bda60e083018b8d611b7d565b8281036020840152611bed818a8c611b7d565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c6657600080fd5b83018035915067ffffffffffffffff821115611c8157600080fd5b60200191503681900382131561196857600080fd5b60008085851115611ca657600080fd5b83861115611cb357600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611d005780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b83811015611d33578181015183820152602001611d1b565b50506000910152565b6020815260008251806020840152611d5b816040850160208701611d18565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611df057600080fd5b9190910192915050565b600060208284031215611e0c57600080fd5b813580151581146115aa57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611e5e57611e5e611e1c565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215611ea557600080fd5b815167ffffffffffffffff80821115611ebd57600080fd5b818401915084601f830112611ed157600080fd5b815181811115611ee357611ee3611e64565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611f2957611f29611e64565b81604052828152876020848701011115611f4257600080fd5b611f53836020830160208801611d18565b979650505050505050565b80820180821115611e5e57611e5e611e1c56fea2646970667358221220aa152c3300b47ddff3dfd4fc776e636488ea9c69421e4b0b38af801b7f3b963064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapTokensGenericV3FromERC20";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
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
        readonly name: "swapTokensGenericV3FromNative";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
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
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
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
        readonly type: "function";
        readonly name: "swapTokensSingleV3ERC20ToNative";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
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
        readonly type: "function";
        readonly name: "swapTokensSingleV3NativeToERC20";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_integrator";
            readonly type: "string";
            readonly internalType: "string";
        }, {
            readonly name: "_referrer";
            readonly type: "string";
            readonly internalType: "string";
        }, {
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
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): GenericSwapFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): GenericSwapFacetV3;
}
export {};
