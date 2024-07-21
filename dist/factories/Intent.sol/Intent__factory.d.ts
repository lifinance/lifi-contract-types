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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5030608052608051610ca66100366000396000818160be01526102580152610ca66000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac5780636568a2791461010a57806379502c551461012a57600080fd5b80630c165e921461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a6100853660046109c5565b6101d6565b005b34801561009857600080fd5b5061008a6100a7366004610a29565b610388565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5061008a610125366004610a29565b6107dc565b34801561013657600080fd5b5060005460015460025460035460045460055460065460075461017b97969573ffffffffffffffffffffffffffffffffffffffff908116958116941692919060ff1688565b60408051988952602089019790975273ffffffffffffffffffffffffffffffffffffffff9586169688019690965292841660608701529216608085015260a084019190915260c083015260ff1660e082015261010001610101565b806040516020016101e79190610a94565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009161027e917f000000000000000000000000000000000000000000000000000000000000000091906108a6565b90503073ffffffffffffffffffffffffffffffffffffffff8216146102cf576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556102e46040830160208401610af4565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556103396060830160408401610af4565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60035473ffffffffffffffffffffffffffffffffffffffff1633146103d9576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075460ff1615610416576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561058e57600083838381811061046057610460610b16565b90506020028101906104729190610b45565b610480906020810190610af4565b73ffffffffffffffffffffffffffffffffffffffff168484848181106104a8576104a8610b16565b90506020028101906104ba9190610b45565b602001358585858181106104d0576104d0610b16565b90506020028101906104e29190610b45565b6104f0906040810190610b83565b6040516104fe929190610be8565b60006040518083038185875af1925050503d806000811461053b576040519150601f19603f3d011682016040523d82523d6000602084013e610540565b606091505b505090508061057b576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508061058681610bf8565b915050610444565b5060045473ffffffffffffffffffffffffffffffffffffffff16158015610672576005544710156105eb576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025461060d9073ffffffffffffffffffffffffffffffffffffffff16610903565b6000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff93841681529290911660208301524782820152517f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59181900360600190a2505050565b600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925260009173ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa1580156106e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070a9190610c57565b600554909150811015610749576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6004546002546107729173ffffffffffffffffffffffffffffffffffffffff9081169116610922565b506000546002546004546040805173ffffffffffffffffffffffffffffffffffffffff938416815292909116602083015281018390527f88cb839d71237099623ebb2cbcf82ff9c18e87784e655c264db8c6d20738d9a59060600160405180910390a2505b505050565b60005b818110156107d75760008383838181106107fb576107fb610b16565b90506020020160208101906108109190610af4565b73ffffffffffffffffffffffffffffffffffffffff16036108555760025461084d9073ffffffffffffffffffffffffffffffffffffffff16610903565b6001016107df565b61089d83838381811061086a5761086a610b16565b905060200201602081019061087f9190610af4565b60025473ffffffffffffffffffffffffffffffffffffffff16610922565b506001016107df565b6000806108ed8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b90506108fa8185856109a3565b95945050505050565b60003860003847855af161091f5763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d1116610952576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610998576390b8ec186000526004601cfd5b600060345292915050565b600060ff60005350603592835260601b60015260155260556000908120915290565b600060a082840312156109d757600080fd5b50919050565b60008083601f8401126109ef57600080fd5b50813567ffffffffffffffff811115610a0757600080fd5b6020830191508360208260051b8501011115610a2257600080fd5b9250929050565b60008060208385031215610a3c57600080fd5b823567ffffffffffffffff811115610a5357600080fd5b610a5f858286016109dd565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a8f57600080fd5b919050565b8135815260a08101610aa860208401610a6b565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610ad260408701610a6b565b1660408501525050606083013560608301526080830135608083015292915050565b600060208284031215610b0657600080fd5b610b0f82610a6b565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610b7957600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610bb857600080fd5b83018035915067ffffffffffffffff821115610bd357600080fd5b602001915036819003821315610a2257600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610c50577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610c6957600080fd5b505191905056fea264697066735822122092805e41591eb4e9792161657dfec1453e64add872d1b3f8cdb15f46b9b93c6e64736f6c63430008110033";
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
    static createInterface(): IntentInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Intent;
}
export {};
