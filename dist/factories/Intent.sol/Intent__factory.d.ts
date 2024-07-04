import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Intent, IntentInterface } from "../../Intent.sol/Intent";
declare type IntentConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Intent__factory extends ContractFactory {
    constructor(...args: IntentConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Intent>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Intent;
    connect(signer: Signer): Intent__factory;
    static readonly bytecode = "0x60a06040526006805460ff1916905534801561001a57600080fd5b5030608052608051610c0b6100416000396000818161012a01526106b40152610c0b6000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80636568a27911610081578063d0202d3b1161005b578063d0202d3b146101ad578063f7260d3e146101cd578063fe0cd200146101ed57600080fd5b80636568a27914610171578063bfa0b13314610184578063c45a01551461018d57600080fd5b806331a38c89116100b257806331a38c89146100f35780633f707e6b146101105780635c60da1b1461012557600080fd5b80630ada1b8a146100ce57806329ac3ec1146100ea575b600080fd5b6100d760005481565b6040519081526020015b60405180910390f35b6100d760055481565b6006546101009060ff1681565b60405190151581526020016100e1565b61012361011e366004610980565b610200565b005b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b61012361017f366004610980565b6105b0565b6100d760015481565b60035461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60045461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60025461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b6101236101fb3660046109c2565b610682565b60065460ff1615610272576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f496e74656e743a20616c7265616479206578656375746564000000000000000060448201526064015b60405180910390fd5b600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561041a5760008383838181106102bc576102bc6109da565b90506020028101906102ce9190610a09565b6102dc906020810190610a70565b73ffffffffffffffffffffffffffffffffffffffff16848484818110610304576103046109da565b90506020028101906103169190610a09565b6020013585858581811061032c5761032c6109da565b905060200281019061033e9190610a09565b61034c906040810190610a92565b60405161035a929190610af7565b60006040518083038185875af1925050503d8060008114610397576040519150601f19603f3d011682016040523d82523d6000602084013e61039c565b606091505b5050905080610407576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e74656e743a2063616c6c206661696c6564000000000000000000000000006044820152606401610269565b508061041281610b07565b9150506102a0565b50600554600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa15801561048d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b19190610b66565b101561053f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f496e74656e743a20696e73756666696369656e74206f757470757420616d6f7560448201527f6e740000000000000000000000000000000000000000000000000000000000006064820152608401610269565b60045473ffffffffffffffffffffffffffffffffffffffff166105825760025461057e9073ffffffffffffffffffffffffffffffffffffffff16610815565b5050565b6004546002546105ab9173ffffffffffffffffffffffffffffffffffffffff9081169116610834565b505050565b60005b818110156105ab5760008383838181106105cf576105cf6109da565b90506020020160208101906105e49190610a70565b73ffffffffffffffffffffffffffffffffffffffff1603610626576002546106219073ffffffffffffffffffffffffffffffffffffffff16610815565b610670565b61066e83838381811061063b5761063b6109da565b90506020020160208101906106509190610a70565b60025473ffffffffffffffffffffffffffffffffffffffff16610834565b505b8061067a81610b07565b9150506105b3565b6000816040516020016106959190610b7f565b60405160208183030381529060405280519060200120905060006106da7f000000000000000000000000000000000000000000000000000000000000000083336108b5565b90503073ffffffffffffffffffffffffffffffffffffffff82161461075b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f496e74656e743a20696e76616c696420696e697420706172616d7300000000006044820152606401610269565b82356000556107706040840160208501610a70565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556107c56060840160408501610a70565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055505060600135600555565b60003860003847855af16108315763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d1116610864576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166108aa576390b8ec186000526004601cfd5b600060345292915050565b6000806108fc8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b9050610909818585610912565b95945050505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b60008083601f84011261094657600080fd5b50813567ffffffffffffffff81111561095e57600080fd5b6020830191508360208260051b850101111561097957600080fd5b9250929050565b6000806020838503121561099357600080fd5b823567ffffffffffffffff8111156109aa57600080fd5b6109b685828601610934565b90969095509350505050565b6000608082840312156109d457600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610a3d57600080fd5b9190910192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a6b57600080fd5b919050565b600060208284031215610a8257600080fd5b610a8b82610a47565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610ac757600080fd5b83018035915067ffffffffffffffff821115610ae257600080fd5b60200191503681900382131561097957600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b5f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610b7857600080fd5b5051919050565b8135815260808101610b9360208401610a47565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610bbd60408701610a47565b1660408501525050606083013560608301529291505056fea26469706673582212207bb8cf23e7b94649d80b4a349406fd22cae6e64e842d3560054ce4cf0d58c06d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "amoutOutMin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly name: "executed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "factory";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "amoutOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "intentId";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "receiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "salt";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "tokenOut";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdrawAll";
        readonly inputs: readonly [{
            readonly name: "tokens";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }];
    static createInterface(): IntentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Intent;
}
export {};
