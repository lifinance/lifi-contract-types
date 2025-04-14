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
    static readonly bytecode = "0x60e060405234801562000010575f80fd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b8152506012825f9081620000669190620001d0565b506001620000758382620001d0565b5060ff81166080524660a0526200008b62000098565b60c0525062000316915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051620000ca91906200029c565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b5f52604160045260245ffd5b600181811c908216806200015b57607f821691505b6020821081036200017a57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115620001cb57805f5260205f20601f840160051c81016020851015620001a75750805b601f840160051c820191505b81811015620001c8575f8155600101620001b3565b50505b505050565b81516001600160401b03811115620001ec57620001ec62000132565b6200020481620001fd845462000146565b8462000180565b602080601f8311600181146200023a575f8415620002225750858301515b5f19600386901b1c1916600185901b17855562000294565b5f85815260208120601f198616915b828110156200026a5788860151825594840194600190910190840162000249565b50858210156200028857878501515f19600388901b60f8161c191681555b505060018460011b0185555b505050505050565b5f808354620002ab8162000146565b60018281168015620002c65760018114620002dc576200030a565b60ff19841687528215158302870194506200030a565b875f526020805f205f5b85811015620003015781548a820152908401908201620002e6565b50505082870194505b50929695505050505050565b60805160a05160c051610f4a620003415f395f6105f101525f6105bc01525f6101ba0152610f4a5ff3fe6080604052600436106100dc575f3560e01c806370a082311161007c578063a9059cbb11610057578063a9059cbb1461026c578063d0e30db01461028b578063d505accf14610293578063dd62ed3e146102b2575f80fd5b806370a08231146102025780637ecebe001461022d57806395d89b4114610258575f80fd5b806323b872dd116100b757806323b872dd1461016b5780632e1a7d4d1461018a578063313ce567146101a95780633644e515146101ee575f80fd5b806306fdde03146100ef578063095ea7b31461011957806318160ddd14610148575f80fd5b366100eb576100e96102e8565b005b5f80fd5b3480156100fa575f80fd5b50610103610329565b6040516101109190610bd3565b60405180910390f35b348015610124575f80fd5b50610138610133366004610c65565b6103b4565b6040519015158152602001610110565b348015610153575f80fd5b5061015d60025481565b604051908152602001610110565b348015610176575f80fd5b50610138610185366004610c8d565b61042d565b348015610195575f80fd5b506100e96101a4366004610cc6565b61056d565b3480156101b4575f80fd5b506101dc7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610110565b3480156101f9575f80fd5b5061015d6105b9565b34801561020d575f80fd5b5061015d61021c366004610cdd565b60036020525f908152604090205481565b348015610238575f80fd5b5061015d610247366004610cdd565b60056020525f908152604090205481565b348015610263575f80fd5b50610103610613565b348015610277575f80fd5b50610138610286366004610c65565b610620565b6100e96102e8565b34801561029e575f80fd5b506100e96102ad366004610cfd565b6106a3565b3480156102bd575f80fd5b5061015d6102cc366004610d6a565b600460209081525f928352604080842090915290825290205481565b6102f233346109c1565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b5f805461033590610d9b565b80601f016020809104026020016040519081016040528092919081815260200182805461036190610d9b565b80156103ac5780601f10610383576101008083540402835291602001916103ac565b820191905f5260205f20905b81548152906001019060200180831161038f57829003601f168201915b505050505081565b335f81815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061041b9086815260200190565b60405180910390a35060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff83165f9081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104bf5761048e8382610e19565b73ffffffffffffffffffffffffffffffffffffffff86165f9081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff85165f90815260036020526040812080548592906104f3908490610e19565b909155505073ffffffffffffffffffffffffffffffffffffffff8085165f81815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061055a9087815260200190565b60405180910390a3506001949350505050565b6105773382610a38565b60405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a26105b63382610ac4565b50565b5f7f000000000000000000000000000000000000000000000000000000000000000046146105ee576105e9610b3b565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001805461033590610d9b565b335f90815260036020526040812080548391908390610640908490610e19565b909155505073ffffffffffffffffffffffffffffffffffffffff83165f81815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061041b9086815260200190565b42841015610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b5f600161071d6105b9565b73ffffffffffffffffffffffffffffffffffffffff8a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561086b573d5f803e3d5ffd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158015906108e657508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152606401610709565b73ffffffffffffffffffffffffffffffffffffffff9081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b8060025f8282546109d29190610e2c565b909155505073ffffffffffffffffffffffffffffffffffffffff82165f818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff82165f9081526003602052604081208054839290610a6c908490610e19565b90915550506002805482900390556040518181525f9073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610a2c565b5f805f805f85875af1905080610b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4554485f5452414e534645525f4641494c4544000000000000000000000000006044820152606401610709565b505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051610b6b9190610e3f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b5f602080835283518060208501525f5b81811015610bff57858101830151858201604001528201610be3565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c60575f80fd5b919050565b5f8060408385031215610c76575f80fd5b610c7f83610c3d565b946020939093013593505050565b5f805f60608486031215610c9f575f80fd5b610ca884610c3d565b9250610cb660208501610c3d565b9150604084013590509250925092565b5f60208284031215610cd6575f80fd5b5035919050565b5f60208284031215610ced575f80fd5b610cf682610c3d565b9392505050565b5f805f805f805f60e0888a031215610d13575f80fd5b610d1c88610c3d565b9650610d2a60208901610c3d565b95506040880135945060608801359350608088013560ff81168114610d4d575f80fd5b9699959850939692959460a0840135945060c09093013592915050565b5f8060408385031215610d7b575f80fd5b610d8483610c3d565b9150610d9260208401610c3d565b90509250929050565b600181811c90821680610daf57607f821691505b602082108103610de6577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8181038181111561042757610427610dec565b8082018082111561042757610427610dec565b5f8083545f60018260011c91506001831680610e5c57607f831692505b60208084108203610e94577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b818015610ea85760018114610edb57610f06565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0086168952841515850289019650610f06565b5f8a8152602090205f5b86811015610efe5781548b820152908501908301610ee5565b505084890196505b50949897505050505050505056fea26469706673582212207921968c13c241f797cf221792e6e62e8813e6ce1c9afd1084fb21ba88f7e1ca64736f6c63430008160033";
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
