import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockUniswapDEX, MockUniswapDEXInterface } from "../MockUniswapDEX";
declare type MockUniswapDEXConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockUniswapDEX__factory extends ContractFactory {
    constructor(...args: MockUniswapDEXConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockUniswapDEX>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockUniswapDEX;
    connect(signer: Signer): MockUniswapDEX__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610f6e806100206000396000f3fe6080604052600436106100c75760003560e01c806352cd24291161007457806394d5567a1161004e57806394d5567a146101b1578063c1d8d1d9146101c7578063fb3bdb411461021957600080fd5b806352cd24291461017d5780637ff36ab5146101905780638803dbee146101a357600080fd5b806338ed1739116100a557806338ed17391461012a5780634a25d94a1461014a5780634b942e351461016a57600080fd5b8063162b4d0c146100cc578063162fd956146100f557806318cbafe51461010a575b600080fd5b3480156100d857600080fd5b506100e260015481565b6040519081526020015b60405180910390f35b610108610103366004610b02565b61022c565b005b34801561011657600080fd5b50610108610125366004610bf5565b61026b565b34801561013657600080fd5b50610108610145366004610bf5565b610282565b34801561015657600080fd5b50610108610165366004610bf5565b6102c2565b610108610178366004610c68565b6103bc565b61010861018b366004610ccf565b610506565b61010861019e366004610dd8565b61087d565b610108610145366004610bf5565b3480156101bd57600080fd5b506100e260025481565b3480156101d357600080fd5b506000546101f49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ec565b610108610227366004610dd8565b61096f565b81816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610262929190610e3f565b60405180910390fd5b61027a858786868660006102c2565b505050505050565b61027a8686868680806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250889250610506915050565b604080516002808252606082018352600092602083019080368337019050509050848460008181106102f6576102f6610e8c565b905060200201602081019061030b9190610ebb565b8160008151811061031e5761031e610e8c565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060008160018151811061036d5761036d610e8c565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506103b386888386610506565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff83161561046d576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610444573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104689190610edf565b61046f565b475b9050818110156104b5576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610262565b50600192909255600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055600255565b60008073ffffffffffffffffffffffffffffffffffffffff168360008151811061053257610532610e8c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16149050600060015460001461056757600154610569565b855b9050811561062757600060015411801561058557503460015414155b156106225760006001543461059a9190610ef8565b604051909150600090339083908381818185875af1925050503d80600081146105df576040519150601f19603f3d011682016040523d82523d6000602084013e6105e4565b606091505b505090508061061f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b61066e565b61066e3330838760008151811061064057610640610e8c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff16610984909392919063ffffffff16565b6000805460025473ffffffffffffffffffffffffffffffffffffffff9091161591901561069d5760025461069f565b865b905060008261075a57866001815181106106bb576106bb610e8c565b60209081029190910101516040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610731573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107559190610edf565b61075c565b475b90506002548110156107a8576002546040517fcf479181000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610262565b821561084e5760008673ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610808576040519150601f19603f3d011682016040523d82523d6000602084013e61080d565b606091505b5050905080610848576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610872565b6000546108729073ffffffffffffffffffffffffffffffffffffffff168784610a43565b505050505050505050565b6040805160028082526060820183526000926020830190803683370190505090506000816000815181106108b3576108b3610e8c565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508484600181811061090057610900610e8c565b90506020020160208101906109159190610ebb565b8160018151811061092857610928610e8c565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061027a6000878386610506565b61097d85858585600061087d565b5050505050565b60006040517f23b872dd0000000000000000000000000000000000000000000000000000000081528460048201528360248201528260448201526020600060648360008a5af13d15601f3d116001600051141617169150508061097d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610262565b60006040517fa9059cbb000000000000000000000000000000000000000000000000000000008152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080610afc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610262565b50505050565b60008060208385031215610b1557600080fd5b823567ffffffffffffffff80821115610b2d57600080fd5b818501915085601f830112610b4157600080fd5b813581811115610b5057600080fd5b866020828501011115610b6257600080fd5b60209290920196919550909350505050565b60008083601f840112610b8657600080fd5b50813567ffffffffffffffff811115610b9e57600080fd5b6020830191508360208260051b8501011115610bb957600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114610be257600080fd5b50565b8035610bf081610bc0565b919050565b60008060008060008060a08789031215610c0e57600080fd5b8635955060208701359450604087013567ffffffffffffffff811115610c3357600080fd5b610c3f89828a01610b74565b9095509350506060870135610c5381610bc0565b80925050608087013590509295509295509295565b600080600060608486031215610c7d57600080fd5b833592506020840135610c8f81610bc0565b929592945050506040919091013590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215610ce557600080fd5b843593506020808601359350604086013567ffffffffffffffff80821115610d0c57600080fd5b818801915088601f830112610d2057600080fd5b813581811115610d3257610d32610ca0565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610d7557610d75610ca0565b60405291825284820192508381018501918b831115610d9357600080fd5b938501935b82851015610db857610da985610be5565b84529385019392850192610d98565b809750505050505050610dcd60608601610be5565b905092959194509250565b600080600080600060808688031215610df057600080fd5b85359450602086013567ffffffffffffffff811115610e0e57600080fd5b610e1a88828901610b74565b9095509350506040860135610e2e81610bc0565b949793965091946060013592915050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610ecd57600080fd5b8135610ed881610bc0565b9392505050565b600060208284031215610ef157600080fd5b5051919050565b81810381811115610f32577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea264697066735822122071d2faeb232e772deffb69d28da2d39e6e03bf1e27f66ad0645ffa4483f9c08e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "inputAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mockSwapWillRevertWithReason";
        readonly inputs: readonly [{
            readonly name: "reason";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "mockSwapWithPresetInputAndOutput";
        readonly inputs: readonly [{
            readonly name: "amountInIfNotPreset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutIfNotPreset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "outputAmount";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "outputToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setSwapOutput";
        readonly inputs: readonly [{
            readonly name: "_inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_outputToken";
            readonly type: "address";
            readonly internalType: "contract ERC20";
        }, {
            readonly name: "_outputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapETHForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapExactETHForTokens";
        readonly inputs: readonly [{
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForETH";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapExactTokensForTokens";
        readonly inputs: readonly [{
            readonly name: "amountIn";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactETH";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapTokensForExactTokens";
        readonly inputs: readonly [{
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "amountInMax";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "path";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): MockUniswapDEXInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockUniswapDEX;
}
export {};
