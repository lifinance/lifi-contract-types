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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506112a18061001c5f395ff3fe60806040526004361061003e575f3560e01c80634d91497914610042578063922c8daa1461006c578063b7c527771461007f578063efae576b14610092575b5f5ffd5b610055610050366004610c7f565b6100a5565b604051610063929190610d77565b60405180910390f35b61005561007a366004610dd3565b6100cf565b61005561008d366004610eab565b6100ef565b6100556100a0366004610fb9565b610125565b5f60606100bb8d8d8d8d8d8d8d8d8d8d8d61014d565b915091509b509b9950505050505050505050565b5f60606100dc8d8a610360565b506100bb8c8c8c8c8c8c8c8c8c8c61040d565b5f60606100fc8e8a610360565b506101108d8d8d8d8d8d8d8d8d8d8d61014d565b915091509c509c9a5050505050505050505050565b5f606061013a8c8c8c8c8c8c8c8c8c8c61040d565b915091509a509a98505050505050505050565b5f60608b8a14158061015f57508b8414155b15610196576040517f568efce200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff89166101e3576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b60ff81168d11156102e1576102378e8e8360ff1681811061020857610208611092565b905060200201602081019061021d91906110bf565b73ffffffffffffffffffffffffffffffffffffffff161590565b1561026e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85858260ff1681811061028357610283611092565b905060200281019061029591906110df565b90505f036102cf576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806102d981611170565b9150506101e5565b505f8667ffffffffffffffff8111156102fc576102fc61118e565b6040519080825280601f01601f191660200182016040528015610326576020820181803683370190505b5090508688602083013761033f8e8e8e8e8a8a87610541565b61034b8a8a8387610603565b92509250509b509b9950505050505050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523360048201525f9073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156103ca573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103ee91906111bb565b90506103fc8333308461073a565b6104078383836107fc565b92915050565b5f606073ffffffffffffffffffffffffffffffffffffffff8c161580610447575073ffffffffffffffffffffffffffffffffffffffff8916155b1561047e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8490036104b8576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6104c48d8d8d61082d565b90505f8767ffffffffffffffff8111156104e0576104e061118e565b6040519080825280601f01601f19166020018201604052801561050a576020820181803683370190505b5090508789602083013761052081888885610929565b61052c8b8b8388610603565b9350935050509a509a98505050505050505050565b5f5b60ff81168711156105f9575f6105a889898460ff1681811061056757610567611092565b905060200201602081019061057c91906110bf565b88888560ff1681811061059157610591611092565b90506020028101906105a391906111d2565b61082d565b9050365f86868560ff168181106105c1576105c1611092565b90506020028101906105d391906110df565b915091506105e385838386610929565b50505080806105f190611170565b915050610543565b5050505050505050565b5f60608215610679578573ffffffffffffffffffffffffffffffffffffffff16846040516106319190611233565b5f60405180830381855af49150503d805f8114610669576040519150601f19603f3d011682016040523d82523d5f602084013e61066e565b606091505b5090925090506106e5565b8573ffffffffffffffffffffffffffffffffffffffff16858560405161069f9190611233565b5f6040518083038185875af1925050503d805f81146106d9576040519150601f19603f3d011682016040523d82523d5f602084013e6106de565b606091505b5090925090505b81610731578051156106ff576106fa81610965565b610731565b6040517f6b3b657600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b94509492505050565b73ffffffffffffffffffffffffffffffffffffffff8416610787576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107d4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107f673ffffffffffffffffffffffffffffffffffffffff851684848461096f565b50505050565b6108288383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6109c7565b505050565b5f5f5f8573ffffffffffffffffffffffffffffffffffffffff168585604051610857929190611249565b5f60405180830381855afa9150503d805f811461088f576040519150601f19603f3d011682016040523d82523d5f602084013e610894565b606091505b5091509150816108d0576040517f9711393900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805160201461090b576040517f3ad0505d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8080602001905181019061091f91906111bb565b9695505050505050565b5f5b8281101561095e576109568585858481811061094957610949611092565b9050602002013584610aee565b60010161092b565b5050505050565b8051602082018181fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166109ba57637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8416156107f65773ffffffffffffffffffffffffffffffffffffffff8316610a30576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015610aa3573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ac791906111bb565b10156107f6576107f673ffffffffffffffffffffffffffffffffffffffff85168483610b3b565b8251610afb836020611258565b1115610b33576040517faaf9032800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b910160200152565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610bb9575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610bb957633e3f8f735f526004601cfd5b5f603452505050565b5f5f83601f840112610bd2575f5ffd5b50813567ffffffffffffffff811115610be9575f5ffd5b6020830191508360208260051b8501011115610c03575f5ffd5b9250929050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c2d575f5ffd5b919050565b5f5f83601f840112610c42575f5ffd5b50813567ffffffffffffffff811115610c59575f5ffd5b602083019150836020828501011115610c03575f5ffd5b80358015158114610c2d575f5ffd5b5f5f5f5f5f5f5f5f5f5f5f60e08c8e031215610c99575f5ffd5b8b3567ffffffffffffffff811115610caf575f5ffd5b610cbb8e828f01610bc2565b909c509a505060208c013567ffffffffffffffff811115610cda575f5ffd5b610ce68e828f01610bc2565b909a509850610cf9905060408d01610c0a565b965060608c0135955060808c013567ffffffffffffffff811115610d1b575f5ffd5b610d278e828f01610c32565b90965094505060a08c013567ffffffffffffffff811115610d46575f5ffd5b610d528e828f01610bc2565b9094509250610d65905060c08d01610c70565b90509295989b509295989b9093969950565b8215158152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f5f5f5f5f5f5f5f5f5f5f6101008c8e031215610dee575f5ffd5b610df78c610c0a565b9a50610e0560208d01610c0a565b995060408c013567ffffffffffffffff811115610e20575f5ffd5b610e2c8e828f01610c32565b909a509850610e3f905060608d01610c0a565b965060808c0135955060a08c013567ffffffffffffffff811115610e61575f5ffd5b610e6d8e828f01610c32565b90965094505060c08c013567ffffffffffffffff811115610e8c575f5ffd5b610e988e828f01610bc2565b9094509250610d65905060e08d01610c70565b5f5f5f5f5f5f5f5f5f5f5f5f6101008d8f031215610ec7575f5ffd5b610ed08d610c0a565b9b5067ffffffffffffffff60208e01351115610eea575f5ffd5b610efa8e60208f01358f01610bc2565b909b50995067ffffffffffffffff60408e01351115610f17575f5ffd5b610f278e60408f01358f01610bc2565b9099509750610f3860608e01610c0a565b965060808d0135955067ffffffffffffffff60a08e01351115610f59575f5ffd5b610f698e60a08f01358f01610c32565b909550935067ffffffffffffffff60c08e01351115610f86575f5ffd5b610f968e60c08f01358f01610bc2565b9093509150610fa760e08e01610c70565b90509295989b509295989b509295989b565b5f5f5f5f5f5f5f5f5f5f60e08b8d031215610fd2575f5ffd5b610fdb8b610c0a565b995060208b013567ffffffffffffffff811115610ff6575f5ffd5b6110028d828e01610c32565b909a509850611015905060408c01610c0a565b965060608b0135955060808b013567ffffffffffffffff811115611037575f5ffd5b6110438d828e01610c32565b90965094505060a08b013567ffffffffffffffff811115611062575f5ffd5b61106e8d828e01610bc2565b9094509250611081905060c08c01610c70565b90509295989b9194979a5092959850565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156110cf575f5ffd5b6110d882610c0a565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611112575f5ffd5b83018035915067ffffffffffffffff82111561112c575f5ffd5b6020019150600581901b3603821315610c03575f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60ff821660ff810361118557611185611143565b60010192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f602082840312156111cb575f5ffd5b5051919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611205575f5ffd5b83018035915067ffffffffffffffff82111561121f575f5ffd5b602001915036819003821315610c03575f5ffd5b5f82518060208501845e5f920191825250919050565b818382375f9101908152919050565b808201808211156104075761040761114356fea2646970667358221220dbcb10c1f9e075d969d26d4fc87af5f8ca41ce435163510d0ed2242c7bdb667a64736f6c634300081d0033";
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
