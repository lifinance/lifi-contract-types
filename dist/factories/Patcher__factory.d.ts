import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Patcher, PatcherInterface } from "../Patcher";
type PatcherConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Patcher__factory extends ContractFactory {
    constructor(...args: PatcherConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Patcher>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Patcher;
    connect(signer: Signer): Patcher__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506112598061001c5f395ff3fe60806040526004361061003e575f3560e01c80634d91497914610042578063922c8daa1461006c578063b7c527771461007f578063efae576b14610092575b5f5ffd5b610055610050366004610c5e565b6100a5565b604051610063929190610d56565b60405180910390f35b61005561007a366004610db2565b6100cf565b61005561008d366004610e8a565b6100ee565b6100556100a0366004610f98565b610123565b5f60606100bb8d8d8d8d8d8d8d8d8d8d8d61014b565b915091509b509b9950505050505050505050565b5f60606100dc8d8a610357565b6100bb8c8c8c8c8c8c8c8c8c8c610403565b5f60606100fb8e8a610357565b61010e8d8d8d8d8d8d8d8d8d8d8d61014b565b915091509c509c9a5050505050505050505050565b5f60606101388c8c8c8c8c8c8c8c8c8c610403565b915091509a509a98505050505050505050565b5f60608b8a14158061015d57508b8414155b15610194576040517f568efce200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff89166101e1576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b60ff81168d11156102df576102358e8e8360ff1681811061020657610206611071565b905060200201602081019061021b919061109e565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561026c576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85858260ff1681811061028157610281611071565b905060200281019061029391906110be565b90505f036102cd576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806102d78161114f565b9150506101e3565b505f87878080601f0160208091040260200160405190810160405280939291908181526020018383808284375f81840152601f19601f8201169050808301925050505050505090506103368e8e8e8e8a8a87610525565b6103428a8a83876105e7565b92509250509b509b9950505050505050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156103c1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103e5919061116d565b90506103f38333308461071e565b6103fe8383836107e0565b505050565b5f606073ffffffffffffffffffffffffffffffffffffffff8c16158061043d575073ffffffffffffffffffffffffffffffffffffffff8916155b15610474576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8490036104ae576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6104ba8d8d8d61080c565b90505f88888080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525092935061050492508391508990508885610908565b6105108b8b83886105e7565b9350935050509a509a98505050505050505050565b5f5b60ff81168711156105dd575f61058c89898460ff1681811061054b5761054b611071565b9050602002016020810190610560919061109e565b88888560ff1681811061057557610575611071565b90506020028101906105879190611184565b61080c565b9050365f86868560ff168181106105a5576105a5611071565b90506020028101906105b791906110be565b915091506105c785838386610908565b50505080806105d59061114f565b915050610527565b5050505050505050565b5f6060821561065d578573ffffffffffffffffffffffffffffffffffffffff168460405161061591906111e5565b5f60405180830381855af49150503d805f811461064d576040519150601f19603f3d011682016040523d82523d5f602084013e610652565b606091505b5090925090506106c9565b8573ffffffffffffffffffffffffffffffffffffffff16858560405161068391906111e5565b5f6040518083038185875af1925050503d805f81146106bd576040519150601f19603f3d011682016040523d82523d5f602084013e6106c2565b606091505b5090925090505b81610715578051156106e3576106de81610944565b610715565b6040517f6b3b657600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b94509492505050565b73ffffffffffffffffffffffffffffffffffffffff841661076b576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107b8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107da73ffffffffffffffffffffffffffffffffffffffff851684848461094e565b50505050565b6103fe8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6109a6565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff1685856040516108369291906111fb565b5f60405180830381855afa9150503d805f811461086e576040519150601f19603f3d011682016040523d82523d5f602084013e610873565b606091505b5091509150816108af576040517f9711393900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516020146108ea576040517f3ad0505d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808060200190518101906108fe919061116d565b9695505050505050565b5f5b8281101561093d576109358585858481811061092857610928611071565b9050602002013584610acd565b60010161090a565b5050505050565b8051602082018181fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661099957637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8416156107da5773ffffffffffffffffffffffffffffffffffffffff8316610a0f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610a82573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610aa6919061116d565b10156107da576107da73ffffffffffffffffffffffffffffffffffffffff85168483610b1a565b8251610ada83602061120a565b1115610b12576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b910160200152565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610b98575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610b9857633e3f8f735f526004601cfd5b5f603452505050565b5f5f83601f840112610bb1575f5ffd5b50813567ffffffffffffffff811115610bc8575f5ffd5b6020830191508360208260051b8501011115610be2575f5ffd5b9250929050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c0c575f5ffd5b919050565b5f5f83601f840112610c21575f5ffd5b50813567ffffffffffffffff811115610c38575f5ffd5b602083019150836020828501011115610be2575f5ffd5b80358015158114610c0c575f5ffd5b5f5f5f5f5f5f5f5f5f5f5f60e08c8e031215610c78575f5ffd5b8b3567ffffffffffffffff811115610c8e575f5ffd5b610c9a8e828f01610ba1565b909c509a505060208c013567ffffffffffffffff811115610cb9575f5ffd5b610cc58e828f01610ba1565b909a509850610cd8905060408d01610be9565b965060608c0135955060808c013567ffffffffffffffff811115610cfa575f5ffd5b610d068e828f01610c11565b90965094505060a08c013567ffffffffffffffff811115610d25575f5ffd5b610d318e828f01610ba1565b9094509250610d44905060c08d01610c4f565b90509295989b509295989b9093969950565b8215158152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f5f5f5f5f5f5f5f5f5f5f6101008c8e031215610dcd575f5ffd5b610dd68c610be9565b9a50610de460208d01610be9565b995060408c013567ffffffffffffffff811115610dff575f5ffd5b610e0b8e828f01610c11565b909a509850610e1e905060608d01610be9565b965060808c0135955060a08c013567ffffffffffffffff811115610e40575f5ffd5b610e4c8e828f01610c11565b90965094505060c08c013567ffffffffffffffff811115610e6b575f5ffd5b610e778e828f01610ba1565b9094509250610d44905060e08d01610c4f565b5f5f5f5f5f5f5f5f5f5f5f5f6101008d8f031215610ea6575f5ffd5b610eaf8d610be9565b9b5067ffffffffffffffff60208e01351115610ec9575f5ffd5b610ed98e60208f01358f01610ba1565b909b50995067ffffffffffffffff60408e01351115610ef6575f5ffd5b610f068e60408f01358f01610ba1565b9099509750610f1760608e01610be9565b965060808d0135955067ffffffffffffffff60a08e01351115610f38575f5ffd5b610f488e60a08f01358f01610c11565b909550935067ffffffffffffffff60c08e01351115610f65575f5ffd5b610f758e60c08f01358f01610ba1565b9093509150610f8660e08e01610c4f565b90509295989b509295989b509295989b565b5f5f5f5f5f5f5f5f5f5f60e08b8d031215610fb1575f5ffd5b610fba8b610be9565b995060208b013567ffffffffffffffff811115610fd5575f5ffd5b610fe18d828e01610c11565b909a509850610ff4905060408c01610be9565b965060608b0135955060808b013567ffffffffffffffff811115611016575f5ffd5b6110228d828e01610c11565b90965094505060a08b013567ffffffffffffffff811115611041575f5ffd5b61104d8d828e01610ba1565b9094509250611060905060c08c01610c4f565b90509295989b9194979a5092959850565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156110ae575f5ffd5b6110b782610be9565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126110f1575f5ffd5b83018035915067ffffffffffffffff82111561110b575f5ffd5b6020019150600581901b3603821315610be2575f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60ff821660ff810361116457611164611122565b60010192915050565b5f6020828403121561117d575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126111b7575f5ffd5b83018035915067ffffffffffffffff8211156111d1575f5ffd5b602001915036819003821315610be2575f5ffd5b5f82518060208501845e5f920191825250919050565b818382375f9101908152919050565b8082018082111561121d5761121d611122565b9291505056fea2646970667358221220de41c359e795886f05d1b969072c3cada48b45b561295b11e25a565087227e2564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "depositAndExecuteWithDynamicPatches";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "valueSource";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "valueGetter";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "finalTarget";
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
        }, {
            readonly name: "offsets";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "depositAndExecuteWithMultiplePatches";
        readonly inputs: readonly [{
            readonly name: "tokenAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "valueSources";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "valueGetters";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "finalTarget";
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
        }, {
            readonly name: "offsetGroups";
            readonly type: "uint256[][]";
            readonly internalType: "uint256[][]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeWithDynamicPatches";
        readonly inputs: readonly [{
            readonly name: "valueSource";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "valueGetter";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "finalTarget";
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
        }, {
            readonly name: "offsets";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeWithMultiplePatches";
        readonly inputs: readonly [{
            readonly name: "valueSources";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "valueGetters";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "finalTarget";
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
        }, {
            readonly name: "offsetGroups";
            readonly type: "uint256[][]";
            readonly internalType: "uint256[][]";
        }, {
            readonly name: "delegateCall";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [{
            readonly name: "success";
            readonly type: "bool";
            readonly internalType: "bool";
        }, {
            readonly name: "returnData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "error";
        readonly name: "CallExecutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedToGetDynamicValue";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPatchOffset";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReturnDataLength";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MismatchedArrayLengths";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }];
    static createInterface(): PatcherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Patcher;
}
export {};
