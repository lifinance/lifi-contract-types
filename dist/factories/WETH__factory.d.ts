import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WETH, WETHInterface } from "../WETH";
declare type WETHConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WETH__factory extends ContractFactory {
    constructor(...args: WETHConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WETH>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WETH;
    connect(signer: Signer): WETH__factory;
    static readonly bytecode = "0x60e06040523480156200001157600080fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b81525060128260009081620000689190620001db565b506001620000778382620001db565b5060ff81166080524660a0526200008d6200009a565b60c0525062000325915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000ce9190620002a7565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200016157607f821691505b6020821081036200018257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001d657600081815260208120601f850160051c81016020861015620001b15750805b601f850160051c820191505b81811015620001d257828155600101620001bd565b5050505b505050565b81516001600160401b03811115620001f757620001f762000136565b6200020f816200020884546200014c565b8462000188565b602080601f8311600181146200024757600084156200022e5750858301515b600019600386901b1c1916600185901b178555620001d2565b600085815260208120601f198616915b82811015620002785788860151825594840194600190910190840162000257565b5085821015620002975787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620002b7816200014c565b60018281168015620002d25760018114620002e85762000319565b60ff198416875282151583028701945062000319565b8760005260208060002060005b85811015620003105781548a820152908401908201620002f5565b50505082870194505b50929695505050505050565b60805160a05160c051610f93620003556000396000610610015260006105db015260006101c60152610f936000f3fe6080604052600436106100e15760003560e01c806370a082311161007f578063a9059cbb11610059578063a9059cbb1461027e578063d0e30db01461029e578063d505accf146102a6578063dd62ed3e146102c657600080fd5b806370a082311461020f5780637ecebe001461023c57806395d89b411461026957600080fd5b806323b872dd116100bb57806323b872dd146101745780632e1a7d4d14610194578063313ce567146101b45780633644e515146101fa57600080fd5b806306fdde03146100f5578063095ea7b31461012057806318160ddd1461015057600080fd5b366100f0576100ee6102fe565b005b600080fd5b34801561010157600080fd5b5061010a61033f565b6040516101179190610c03565b60405180910390f35b34801561012c57600080fd5b5061014061013b366004610c98565b6103cd565b6040519015158152602001610117565b34801561015c57600080fd5b5061016660025481565b604051908152602001610117565b34801561018057600080fd5b5061014061018f366004610cc2565b610447565b3480156101a057600080fd5b506100ee6101af366004610cfe565b61058b565b3480156101c057600080fd5b506101e87f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610117565b34801561020657600080fd5b506101666105d7565b34801561021b57600080fd5b5061016661022a366004610d17565b60036020526000908152604090205481565b34801561024857600080fd5b50610166610257366004610d17565b60056020526000908152604090205481565b34801561027557600080fd5b5061010a610632565b34801561028a57600080fd5b50610140610299366004610c98565b61063f565b6100ee6102fe565b3480156102b257600080fd5b506100ee6102c1366004610d39565b6106c4565b3480156102d257600080fd5b506101666102e1366004610dac565b600460209081526000928352604080842090915290825290205481565b61030833346109e8565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b6000805461034c90610ddf565b80601f016020809104026020016040519081016040528092919081815260200182805461037890610ddf565b80156103c55780601f1061039a576101008083540402835291602001916103c5565b820191906000526020600020905b8154815290600101906020018083116103a857829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906104359086815260200190565b60405180910390a35060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104db576104a98382610e61565b73ffffffffffffffffffffffffffffffffffffffff861660009081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff851660009081526003602052604081208054859290610510908490610e61565b909155505073ffffffffffffffffffffffffffffffffffffffff808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906105789087815260200190565b60405180910390a3506001949350505050565b6105953382610a61565b60405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a26105d43382610aef565b50565b60007f0000000000000000000000000000000000000000000000000000000000000000461461060d57610608610b69565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001805461034c90610ddf565b33600090815260036020526040812080548391908390610660908490610e61565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906104359086815260200190565b42841015610733576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b6000600161073f6105d7565b73ffffffffffffffffffffffffffffffffffffffff8a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610891573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061090c57508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610972576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e4552000000000000000000000000000000000000604482015260640161072a565b73ffffffffffffffffffffffffffffffffffffffff90811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b80600260008282546109fa9190610e74565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054839290610a96908490610e61565b909155505060028054829003905560405181815260009073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610a55565b600080600080600085875af1905080610b64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4554485f5452414e534645525f4641494c454400000000000000000000000000604482015260640161072a565b505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610b9b9190610e87565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600060208083528351808285015260005b81811015610c3057858101830151858201604001528201610c14565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c9357600080fd5b919050565b60008060408385031215610cab57600080fd5b610cb483610c6f565b946020939093013593505050565b600080600060608486031215610cd757600080fd5b610ce084610c6f565b9250610cee60208501610c6f565b9150604084013590509250925092565b600060208284031215610d1057600080fd5b5035919050565b600060208284031215610d2957600080fd5b610d3282610c6f565b9392505050565b600080600080600080600060e0888a031215610d5457600080fd5b610d5d88610c6f565b9650610d6b60208901610c6f565b95506040880135945060608801359350608088013560ff81168114610d8f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610dbf57600080fd5b610dc883610c6f565b9150610dd660208401610c6f565b90509250929050565b600181811c90821680610df357607f821691505b602082108103610e2c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561044157610441610e32565b8082018082111561044157610441610e32565b600080835481600182811c915080831680610ea357607f831692505b60208084108203610edb577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b818015610eef5760018114610f2257610f4f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650610f4f565b60008a81526020902060005b86811015610f475781548b820152908501908301610f2e565b505084890196505b50949897505050505050505056fea2646970667358221220f84e02483fde8215bb9719f0d9db9c331507ee7ad9f9ea7d6c8dbb5de1844d3e64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdrawal";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): WETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WETH;
}
export {};
