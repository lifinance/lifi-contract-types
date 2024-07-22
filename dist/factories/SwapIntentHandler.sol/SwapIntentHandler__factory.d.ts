import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { SwapIntentHandler, SwapIntentHandlerInterface } from "../../SwapIntentHandler.sol/SwapIntentHandler";
declare type SwapIntentHandlerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SwapIntentHandler__factory extends ContractFactory {
    constructor(...args: SwapIntentHandlerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<SwapIntentHandler>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): SwapIntentHandler;
    connect(signer: Signer): SwapIntentHandler__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5030608052608051610dbd6100366000396000818160be01526107cc0152610dbd6000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac57806379502c551461010a578063f313816d146101c657600080fd5b8063397a079b1461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610ade565b6101e6565b005b34801561009857600080fd5b5061008a6100a7366004610b35565b6102fc565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5060005460015460025460035460045460055460065460075460085461016198979673ffffffffffffffffffffffffffffffffffffffff908116968116958116941692919060ff1689565b60408051998a5260208a019890985273ffffffffffffffffffffffffffffffffffffffff968716978901979097529385166060880152918416608087015290921660a085015260c084019190915260e083015260ff1661010082015261012001610101565b3480156101d257600080fd5b5061008a6101e1366004610b77565b61074a565b60045473ffffffffffffffffffffffffffffffffffffffff163314801590610226575060025473ffffffffffffffffffffffffffffffffffffffff163314155b1561025d576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b828110156102f657600084848381811061027c5761027c610b8f565b90506020020160208101906102919190610bbe565b73ffffffffffffffffffffffffffffffffffffffff16036102bd576102b582610951565b600101610260565b6102ed8484838181106102d2576102d2610b8f565b90506020020160208101906102e79190610bbe565b83610970565b50600101610260565b50505050565b60045473ffffffffffffffffffffffffffffffffffffffff16331461034d576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085460ff161561038a576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b818110156105025760008383838181106103d4576103d4610b8f565b90506020028101906103e69190610be2565b6103f4906020810190610bbe565b73ffffffffffffffffffffffffffffffffffffffff1684848481811061041c5761041c610b8f565b905060200281019061042e9190610be2565b6020013585858581811061044457610444610b8f565b90506020028101906104569190610be2565b610464906040810190610c20565b604051610472929190610c85565b60006040518083038185875af1925050503d80600081146104af576040519150601f19603f3d011682016040523d82523d6000602084013e6104b4565b606091505b50509050806104ef576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50806104fa81610c95565b9150506103b8565b5060055473ffffffffffffffffffffffffffffffffffffffff161580156105e65760065447101561055f576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003546105819073ffffffffffffffffffffffffffffffffffffffff16610951565b6000546003546005546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301524782820152517f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59181900360600190a2505050565b6005546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610655573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106799190610cf4565b6006549091508110156106b8576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005546003546106e19173ffffffffffffffffffffffffffffffffffffffff9081169116610970565b506000546003546005546040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015281018390527f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59060600160405180910390a250505050565b8060405160200161075b9190610d0d565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600480547fffffffffffffffffffffffff000000000000000000000000000000000000000016339081179091556000916107f2917f000000000000000000000000000000000000000000000000000000000000000091906109f1565b90503073ffffffffffffffffffffffffffffffffffffffff821614610843576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556108586040830160208401610bbe565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556108ad6060830160408401610bbe565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556109026080830160608401610bbe565b600580547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060800135600655565b60003860003847855af161096d5763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d11166109a0576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166109e6576390b8ec186000526004601cfd5b600060345292915050565b600080610a388560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b9050610a45818585610a4e565b95945050505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b60008083601f840112610a8257600080fd5b50813567ffffffffffffffff811115610a9a57600080fd5b6020830191508360208260051b8501011115610ab557600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461096d57600080fd5b600080600060408486031215610af357600080fd5b833567ffffffffffffffff811115610b0a57600080fd5b610b1686828701610a70565b9094509250506020840135610b2a81610abc565b809150509250925092565b60008060208385031215610b4857600080fd5b823567ffffffffffffffff811115610b5f57600080fd5b610b6b85828601610a70565b90969095509350505050565b600060c08284031215610b8957600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610bd057600080fd5b8135610bdb81610abc565b9392505050565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610c1657600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610c5557600080fd5b83018035915067ffffffffffffffff821115610c7057600080fd5b602001915036819003821315610ab557600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610ced577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610d0657600080fd5b5051919050565b8135815260c081016020830135610d2381610abc565b73ffffffffffffffffffffffffffffffffffffffff9081166020840152604084013590610d4f82610abc565b9081166040840152606084013590610d6682610abc565b1660608301526080838101359083015260a09283013592909101919091529056fea26469706673582212204cfc168c3851e4035938038f3d2b32a183bf33d84a560e833d4914ae2278d5ac64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "config";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "intentId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "factory";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amountOutMin";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "executed";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "execute";
        readonly inputs: readonly [{
            readonly name: "calls";
            readonly type: "tuple[]";
            readonly internalType: "struct IIntent.Call[]";
            readonly components: readonly [{
                readonly name: "to";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "value";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "implementation";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "init";
        readonly inputs: readonly [{
            readonly name: "_initData";
            readonly type: "tuple";
            readonly internalType: "struct IIntent.InitData";
            readonly components: readonly [{
                readonly name: "intentId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "owner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdrawAll";
        readonly inputs: readonly [{
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "IntentExecuted";
        readonly inputs: readonly [{
            readonly name: "intentId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "tokenOut";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amountOut";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AlreadyExecuted";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExecutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientOutputAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidParams";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "Unauthorized";
        readonly inputs: readonly [];
    }];
    static createInterface(): SwapIntentHandlerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SwapIntentHandler;
}
export {};
