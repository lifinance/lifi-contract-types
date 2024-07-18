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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5030608052608051610c2a6100366000396000818160be01526102580152610c2a6000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac5780636568a2791461010a57806379502c551461012a57600080fd5b80630c165e921461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610949565b6101d6565b005b34801561009857600080fd5b5061008a6100a73660046109ad565b610388565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5061008a6101253660046109ad565b61070f565b34801561013657600080fd5b5060005460015460025460035460045460055460065460075461017b97969573ffffffffffffffffffffffffffffffffffffffff908116958116941692919060ff1688565b60408051988952602089019790975273ffffffffffffffffffffffffffffffffffffffff9586169688019690965292841660608701529216608085015260a084019190915260c083015260ff1660e082015261010001610101565b806040516020016101e79190610a18565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009161027e917f0000000000000000000000000000000000000000000000000000000000000000919061082a565b90503073ffffffffffffffffffffffffffffffffffffffff8216146102cf576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556102e46040830160208401610a78565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556103396060830160408401610a78565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60035473ffffffffffffffffffffffffffffffffffffffff1633146103d9576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075460ff1615610416576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561058e57600083838381811061046057610460610a9a565b90506020028101906104729190610ac9565b610480906020810190610a78565b73ffffffffffffffffffffffffffffffffffffffff168484848181106104a8576104a8610a9a565b90506020028101906104ba9190610ac9565b602001358585858181106104d0576104d0610a9a565b90506020028101906104e29190610ac9565b6104f0906040810190610b07565b6040516104fe929190610b6c565b60006040518083038185875af1925050503d806000811461053b576040519150601f19603f3d011682016040523d82523d6000602084013e610540565b606091505b505090508061057b576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508061058681610b7c565b915050610444565b5060045473ffffffffffffffffffffffffffffffffffffffff16158015610612576005544710156105eb576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025461060d9073ffffffffffffffffffffffffffffffffffffffff16610887565b505050565b600554600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610684573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a89190610bdb565b10156106e0576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004546002546107099173ffffffffffffffffffffffffffffffffffffffff90811691166108a6565b50505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314610760576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b8181101561060d57600083838381811061077f5761077f610a9a565b90506020020160208101906107949190610a78565b73ffffffffffffffffffffffffffffffffffffffff16036107d9576002546107d19073ffffffffffffffffffffffffffffffffffffffff16610887565b600101610763565b6108218383838181106107ee576107ee610a9a565b90506020020160208101906108039190610a78565b60025473ffffffffffffffffffffffffffffffffffffffff166108a6565b50600101610763565b6000806108718560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061087e818585610927565b95945050505050565b60003860003847855af16108a35763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d11166108d6576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d15600160005114171661091c576390b8ec186000526004601cfd5b600060345292915050565b600060ff60005350603592835260601b60015260155260556000908120915290565b600060a0828403121561095b57600080fd5b50919050565b60008083601f84011261097357600080fd5b50813567ffffffffffffffff81111561098b57600080fd5b6020830191508360208260051b85010111156109a657600080fd5b9250929050565b600080602083850312156109c057600080fd5b823567ffffffffffffffff8111156109d757600080fd5b6109e385828601610961565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a1357600080fd5b919050565b8135815260a08101610a2c602084016109ef565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610a56604087016109ef565b1660408501525050606083013560608301526080830135608083015292915050565b600060208284031215610a8a57600080fd5b610a93826109ef565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610afd57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610b3c57600080fd5b83018035915067ffffffffffffffff821115610b5757600080fd5b6020019150368190038213156109a657600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610bd4577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610bed57600080fd5b505191905056fea2646970667358221220fa7822a8796639e59098f70e37972745bc4b30850b2df3d7ca61b953a7edebeb64736f6c63430008110033";
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
