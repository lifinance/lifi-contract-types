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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5030608052608051610be86100366000396000818160be01526102570152610be86000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100ac5780636568a2791461010a57806379502c551461012a57600080fd5b80630c165e921461006a5780633f707e6b1461008c57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610907565b6101d5565b005b34801561009857600080fd5b5061008a6100a736600461096b565b610387565b3480156100b857600080fd5b506100e07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561011657600080fd5b5061008a61012536600461096b565b6106cd565b34801561013657600080fd5b5060005460015460025460035460045460055460065460075461017b97969573ffffffffffffffffffffffffffffffffffffffff908116958116941692919060ff1688565b60408051988952602089019790975273ffffffffffffffffffffffffffffffffffffffff9586169688019690965292841660608701529216608085015260a084019190915260c0830152151560e082015261010001610101565b806040516020016101e691906109d6565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101206001819055600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811790915560009161027d917f000000000000000000000000000000000000000000000000000000000000000091906107e8565b90503073ffffffffffffffffffffffffffffffffffffffff8216146102ce576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81356000556102e36040830160208401610a36565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556103386060830160408401610a36565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790555060600135600555565b60035473ffffffffffffffffffffffffffffffffffffffff1633146103d8576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075460ff1615610415576040517f0dc1019700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560005b8181101561058d57600083838381811061045f5761045f610a58565b90506020028101906104719190610a87565b61047f906020810190610a36565b73ffffffffffffffffffffffffffffffffffffffff168484848181106104a7576104a7610a58565b90506020028101906104b99190610a87565b602001358585858181106104cf576104cf610a58565b90506020028101906104e19190610a87565b6104ef906040810190610ac5565b6040516104fd929190610b2a565b60006040518083038185875af1925050503d806000811461053a576040519150601f19603f3d011682016040523d82523d6000602084013e61053f565b606091505b505090508061057a576040517facfdb44400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b508061058581610b3a565b915050610443565b50600554600480546040517f70a08231000000000000000000000000000000000000000000000000000000008152309281019290925273ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610600573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106249190610b99565b101561065c576040517f42301c2300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045473ffffffffffffffffffffffffffffffffffffffff1661069f5760025461069b9073ffffffffffffffffffffffffffffffffffffffff16610845565b5050565b6004546002546106c89173ffffffffffffffffffffffffffffffffffffffff9081169116610864565b505050565b60035473ffffffffffffffffffffffffffffffffffffffff16331461071e576040517f82b4290000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156106c857600083838381811061073d5761073d610a58565b90506020020160208101906107529190610a36565b73ffffffffffffffffffffffffffffffffffffffff16036107975760025461078f9073ffffffffffffffffffffffffffffffffffffffff16610845565b600101610721565b6107df8383838181106107ac576107ac610a58565b90506020020160208101906107c19190610a36565b60025473ffffffffffffffffffffffffffffffffffffffff16610864565b50600101610721565b60008061082f8560006c5af43d3d93803e602a57fd5bf36021528160145273602c3d8160093d39f33d3d3d3d363d3d37363d736000526035600c2090506000602152919050565b905061083c8185856108e5565b95945050505050565b60003860003847855af16108615763b12d13eb6000526004601cfd5b50565b60006370a0823160005230602052602060346024601c865afa601f3d1116610894576390b8ec186000526004601cfd5b8160145260345190506fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166108da576390b8ec186000526004601cfd5b600060345292915050565b600060ff60005350603592835260601b60015260155260556000908120915290565b600060a0828403121561091957600080fd5b50919050565b60008083601f84011261093157600080fd5b50813567ffffffffffffffff81111561094957600080fd5b6020830191508360208260051b850101111561096457600080fd5b9250929050565b6000806020838503121561097e57600080fd5b823567ffffffffffffffff81111561099557600080fd5b6109a18582860161091f565b90969095509350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146109d157600080fd5b919050565b8135815260a081016109ea602084016109ad565b73ffffffffffffffffffffffffffffffffffffffff808216602085015280610a14604087016109ad565b1660408501525050606083013560608301526080830135608083015292915050565b600060208284031215610a4857600080fd5b610a51826109ad565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112610abb57600080fd5b9190910192915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112610afa57600080fd5b83018035915067ffffffffffffffff821115610b1557600080fd5b60200191503681900382131561096457600080fd5b8183823760009101908152919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610b92577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b600060208284031215610bab57600080fd5b505191905056fea264697066735822122051b1fe9987741406e383dc1fe647e3266e4f46158aa5fa71086cc211c2a8606664736f6c63430008110033";
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
            readonly type: "bool";
            readonly internalType: "bool";
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
