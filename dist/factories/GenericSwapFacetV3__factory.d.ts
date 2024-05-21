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
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061217b806100206000396000f3fe6080604052600436106100655760003560e01c8063733214a311610043578063733214a3146100a5578063736eac0b146100b8578063af7060fd146100cb57600080fd5b80632c57e8841461006a5780634666fc801461007f5780635fd9ae2e14610092575b600080fd5b61007d610078366004611b68565b6100de565b005b61007d61008d366004611c59565b610110565b61007d6100a0366004611b68565b61031b565b61007d6100b3366004611c59565b610342565b61007d6100c6366004611b68565b610325565b61007d6100d9366004611c59565b61052f565b6100e88282610919565b6100f482828b876109a8565b610105898989898989898989610f76565b505050505050505050565b61011a8184611108565b600061012c6080830160608401611d1b565b905060006101406060840160408501611d1b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156101b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d49190611d38565b90508481101561021f576040517f275c273c00000000000000000000000000000000000000000000000000000000815260048101869052602481018290526044015b60405180910390fd5b61024073ffffffffffffffffffffffffffffffffffffffff84168783611475565b60808401357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388c6102746020880188611d1b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281871690830152861660608201526080810183905260a081018490524260c082015260e00160405180910390a18b7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378c8c8c8c8c898b898b60405161030599989796959493929190611d9a565b60405180910390a2505050505050505050505050565b6103258282610919565b61033182828b876109a8565b61010589898989898989898961152e565b61034c8184611108565b4782811015610391576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810184905260248101829052604401610216565b60008473ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146103eb576040519150601f19603f3d011682016040523d82523d6000602084013e6103f0565b606091505b505090508061042b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061043d6080850160608601611d1b565b905060006104516060860160408701611d1b565b905060808501357f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388d6104876020890189611d1b565b6040805192835273ffffffffffffffffffffffffffffffffffffffff918216602084015281861690830152851660608201526080810183905260a081018790524260c082015260e00160405180910390a18c7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378d8d8d8d8d888a898e60405161051899989796959493929190611d9a565b60405180910390a250505050505050505050505050565b600061053e6020830183611d1b565b905061058e8173ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561061357506106136105a560a0840184611e05565b6105b491600491600091611e6a565b6105bd91611e94565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610649576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008073ffffffffffffffffffffffffffffffffffffffff83163461067160a0870187611e05565b60405161067f929190611edc565b60006040518083038185875af1925050503d80600081146106bc576040519150601f19603f3d011682016040523d82523d6000602084013e6106c1565b606091505b50915091508161070c5760006106d682611707565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102169190611f10565b600061071e6080860160608701611d1b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561078e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b29190611d38565b9050868110156107f8576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810188905260248101829052604401610216565b61081973ffffffffffffffffffffffffffffffffffffffff83168983611475565b600061082b6060880160408901611d1b565b90506000876080013590507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388f8884878588426040516108b8979695949392919096875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385166040870152919093166060850152608084019290925260a083019190915260c082015260e00190565b60405180910390a18e7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378f8f8f8f8f888b898c60405161090099989796959493929190611d9a565b60405180910390a2505050505050505050505050505050565b8060005b818110156109a2573684848381811061093857610938611f61565b905060200281019061094a9190611f90565b905061095c60e0820160c08301611fce565b15610999576109993330608084013561097b6060860160408701611d1b565b73ffffffffffffffffffffffffffffffffffffffff16929190611785565b5060010161091d565b50505050565b8260005b81811015610f6e57368686838181106109c7576109c7611f61565b90506020028101906109d99190611f90565b905060006109ed6060830160408401611d1b565b9050610a496109ff6020840184611d1b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b1580610a625750610a606105a560a0840184611e05565b155b15610a99576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610aa66020830183611d1b565b73ffffffffffffffffffffffffffffffffffffffff16610acc6040840160208501611d1b565b73ffffffffffffffffffffffffffffffffffffffff1614158015610b005750610afe6109ff6040840160208501611d1b565b155b15610b37576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610b66610b4c6060850160408601611d1b565b73ffffffffffffffffffffffffffffffffffffffff161590565b905080610cc357600073ffffffffffffffffffffffffffffffffffffffff831663dd62ed3e30610b9c6040880160208901611d1b565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015610c0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c309190611d38565b90508360800135811015610cc157610c70610c516040860160208701611d1b565b73ffffffffffffffffffffffffffffffffffffffff851690600061184b565b610cc1610c836040860160208701611d1b565b73ffffffffffffffffffffffffffffffffffffffff8516907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61184b565b505b600080610cd36020860186611d1b565b73ffffffffffffffffffffffffffffffffffffffff1683610cf5576000610cfb565b85608001355b610d0860a0880188611e05565b604051610d16929190611edc565b60006040518083038185875af1925050503d8060008114610d53576040519150601f19603f3d011682016040523d82523d6000602084013e610d58565b606091505b509150915081610d9e57610d6b81611707565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102169190611f10565b7f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889610dcd6020880188611d1b565b610ddd6060890160408a01611d1b565b610ded60808a0160608b01611d1b565b60808a01803590610e0590610b4c9060608e01611d1b565b610eae57610e1960808c0160608d01611d1b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa158015610e85573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea99190611d38565b610eb0565b475b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1610f136080860160608701611d1b565b73ffffffffffffffffffffffffffffffffffffffff16610f396060870160408801611d1b565b73ffffffffffffffffffffffffffffffffffffffff1614610f5e57610f5e8489611904565b85600101955050505050506109ac565b505050505050565b4783811015610fbb576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810185905260248101829052604401610216565b60008573ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611015576040519150601f19603f3d011682016040523d82523d6000602084013e61101a565b606091505b5050905080611055576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a600081811061108f5761108f611f61565b90506020028101906110a19190611f90565b6110b2906060810190604001611d1b565b60008c8c60008181106110c7576110c7611f61565b90506020028101906110d99190611f90565b608001358b6040516110f399989796959493929190611d9a565b60405180910390a25050505050505050505050565b600061111a6060840160408501611d1b565b9050608083013561114373ffffffffffffffffffffffffffffffffffffffff8316333084611785565b60006111526020860186611d1b565b905060006111666040870160208801611d1b565b905036600061117860a0890189611e05565b915091506111ca8473ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111e257506111e26105b4600460008486611e6a565b611218576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611299575073ffffffffffffffffffffffffffffffffffffffff831660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff16155b156112d0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff84811660248301526000919088169063dd62ed3e90604401602060405180830381865afa158015611346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061136a9190611d38565b9050858110156113dd57801561139c5761139c73ffffffffffffffffffffffffffffffffffffffff881685600061184b565b6113dd73ffffffffffffffffffffffffffffffffffffffff8816857fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61184b565b6000808673ffffffffffffffffffffffffffffffffffffffff168585604051611407929190611edc565b6000604051808303816000865af19150503d8060008114611444576040519150601f19603f3d011682016040523d82523d6000602084013e611449565b606091505b50915091508161145e5760006106d682611707565b611468898b611904565b5050505050505050505050565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610216565b6000828261153d60018261201f565b81811061154c5761154c611f61565b905060200281019061155e9190611f90565b61156f906080810190606001611d1b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290915060009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156115df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116039190611d38565b905084811015611649576040517f275c273c0000000000000000000000000000000000000000000000000000000081526004810186905260248101829052604401610216565b61166a73ffffffffffffffffffffffffffffffffffffffff83168783611475565b8a7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378b8b8b8b8b8a8a60008181106116a4576116a4611f61565b90506020028101906116b69190611f90565b6116c7906060810190604001611d1b565b898c8c60008181106116db576116db611f61565b90506020028101906116ed9190611f90565b608001358a6040516110f399989796959493929190611d9a565b606060448251101561174c57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b60006117686004808551611760919061201f565b8591906119e0565b90508080602001905181019061177e9190612067565b9392505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610216565b5050505050565b60006040517f095ea7b3000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806109a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f415050524f56455f4641494c45440000000000000000000000000000000000006044820152606401610216565b73ffffffffffffffffffffffffffffffffffffffff8216156119dc576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561198d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119b19190611d38565b905080156119da576119da73ffffffffffffffffffffffffffffffffffffffff84168383611475565b505b5050565b6060816119ee81601f612132565b1015611a26576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611a308284612132565b84511015611a6a576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611a895760405191506000825260208201604052611af1565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611ac2578051835260209283019201611aaa565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60008083601f840112611b0c57600080fd5b50813567ffffffffffffffff811115611b2457600080fd5b602083019150836020828501011115611b3c57600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b6557600080fd5b50565b600080600080600080600080600060c08a8c031215611b8657600080fd5b8935985060208a013567ffffffffffffffff80821115611ba557600080fd5b611bb18d838e01611afa565b909a50985060408c0135915080821115611bca57600080fd5b611bd68d838e01611afa565b909850965060608c01359150611beb82611b43565b90945060808b0135935060a08b01359080821115611c0857600080fd5b818c0191508c601f830112611c1c57600080fd5b813581811115611c2b57600080fd5b8d60208260051b8501011115611c4057600080fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060c0898b031215611c7557600080fd5b88359750602089013567ffffffffffffffff80821115611c9457600080fd5b611ca08c838d01611afa565b909950975060408b0135915080821115611cb957600080fd5b611cc58c838d01611afa565b909750955060608b01359150611cda82611b43565b90935060808a0135925060a08a01359080821115611cf757600080fd5b50890160e0818c031215611d0a57600080fd5b809150509295985092959890939650565b600060208284031215611d2d57600080fd5b813561177e81611b43565b600060208284031215611d4a57600080fd5b5051919050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611dae60e083018b8d611d51565b8281036020840152611dc1818a8c611d51565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e3a57600080fd5b83018035915067ffffffffffffffff821115611e5557600080fd5b602001915036819003821315611b3c57600080fd5b60008085851115611e7a57600080fd5b83861115611e8757600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611ed45780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b83811015611f07578181015183820152602001611eef565b50506000910152565b6020815260008251806020840152611f2f816040850160208701611eec565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fc457600080fd5b9190910192915050565b600060208284031215611fe057600080fd5b8135801515811461177e57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561203257612032611ff0565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60006020828403121561207957600080fd5b815167ffffffffffffffff8082111561209157600080fd5b818401915084601f8301126120a557600080fd5b8151818111156120b7576120b7612038565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156120fd576120fd612038565b8160405282815287602084870101111561211657600080fd5b612127836020830160208801611eec565b979650505050505050565b8082018082111561203257612032611ff056fea2646970667358221220af1dae38ad1d78af64bc8e4272483dcaba2901b6b709d2c477ca6f9c4f7fd61564736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "swapTokensMultipleV3ERC20ToERC20";
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
        readonly name: "swapTokensMultipleV3ERC20ToNative";
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
        readonly name: "swapTokensMultipleV3NativeToERC20";
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
