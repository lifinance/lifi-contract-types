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
    static readonly bytecode = "0x60a06040526006805460ff1916905534801561001a57600080fd5b5030608052608051610c116100416000396000818161012a01526106eb0152610c116000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80636568a27911610081578063d0202d3b1161005b578063d0202d3b146101ad578063f7260d3e146101cd578063fe0cd200146101ed57600080fd5b80636568a27914610171578063bfa0b13314610184578063c45a01551461018d57600080fd5b806331a38c89116100b257806331a38c89146100f35780633f707e6b146101105780635c60da1b1461012557600080fd5b80630ada1b8a146100ce5780632c3bfc08146100ea575b600080fd5b6100d760005481565b6040519081526020015b60405180910390f35b6100d760055481565b6006546101009060ff1681565b60405190151581526020016100e1565b61012361011e366004610986565b610200565b005b61014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b61012361017f366004610986565b610546565b6100d760015481565b60035461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60045461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b60025461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b6101236101fb3660046109c8565b610669565b60035473ffffffffffffffffffffffffffffffffffffffff163314610251576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065460ff161561028e576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600680547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b818110156104065760008383838181106102d8576102d86109e0565b90506020028101906102ea9190610a0f565b6102f8906020810190610a76565b73ffffffffffffffffffffffffffffffffffffffff16848484818110610320576103206109e0565b90506020028101906103329190610a0f565b60200135858585818110610348576103486109e0565b905060200281019061035a9190610a0f565b610368906040810190610a98565b604051610376929190610afd565b60006040518083038185875af1925050503d80600081146103b3576040519150601f19603f3d011682016040523d82523d6000602084013e6103b8565b606091505b50509050806103f3576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50806103fe81610b0d565b9150506102bc565b50600554600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610479573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049d9190610b6c565b10156104d5576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045473ffffffffffffffffffffffffffffffffffffffff16610518576002546105149073ffffffffffffffffffffffffffffffffffffffff1661081b565b5050565b6004546002546105419173ffffffffffffffffffffffffffffffffffffffff908116911661083a565b505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314610597576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156105415760008383838181106105b6576105b66109e0565b90506020020160208101906105cb9190610a76565b73ffffffffffffffffffffffffffffffffffffffff160361060d576002546106089073ffffffffffffffffffffffffffffffffffffffff1661081b565b610657565b610655838383818110610622576106226109e0565b90506020020160208101906106379190610a76565b60025473ffffffffffffffffffffffffffffffffffffffff1661083a565b505b8061066181610b0d565b91505061059a565b8060405160200161067a9190610b85565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001633908117909155600091610711917f000000000000000000000000000000000000000000000000000000000000000091906108bb565b90503073ffffffffffffffffffffffffffffffffffffffff821614610762576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556107776040830160208401610a76565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556107cc6060830160408401610a76565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60003860003847855af16108375763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d111661086a576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166108b0576390b8ec186000526004601cfd5b600060345292915050565b6000806109028560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061090f818585610918565b95945050505050565b600060ff60005350603592835260601b60015260155260556000908120915290565b60008083601f84011261094c57600080fd5b50813567ffffffffffffffff81111561096457600080fd5b6020830191508360208260051b850101111561097f57600080fd5b9250929050565b6000806020838503121561099957600080fd5b823567ffffffffffffffff8111156109b057600080fd5b6109bc8582860161093a565b90969095509350505050565b6000608082840312156109da57600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610a4357600080fd5b9190910192915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a7157600080fd5b919050565b600060208284031215610a8857600080fd5b610a9182610a4d565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610acd57600080fd5b83018035915067ffffffffffffffff821115610ae857600080fd5b60200191503681900382131561097f57600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b65577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610b7e57600080fd5b5051919050565b8135815260808101610b9960208401610a4d565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610bc360408701610a4d565b1660408501525050606083013560608301529291505056fea2646970667358221220c4f104ca9f96ecff9f373e18851a5be48f72b15fb1a695e51413c716ac95692164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "amountOutMin";
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
                readonly name: "amountOutMin";
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
    static createInterface(): IntentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Intent;
}
export {};
