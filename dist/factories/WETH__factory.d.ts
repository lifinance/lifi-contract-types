import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WETH, WETHInterface } from "../WETH";
type WETHConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b506040518060400160405280600d81526020016c2bb930b83832b21022ba3432b960991b815250604051806040016040528060048152602001630ae8aa8960e31b8152506012825f908161006391906101c0565b50600161007083826101c0565b5060ff81166080524660a052610084610090565b60c052506102eb915050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f6040516100c0919061027a565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061015057607f821691505b60208210810361016e57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101bb57805f5260205f20601f840160051c810160208510156101995750805b601f840160051c820191505b818110156101b8575f81556001016101a5565b50505b505050565b81516001600160401b038111156101d9576101d9610128565b6101ed816101e7845461013c565b84610174565b6020601f82116001811461021f575f83156102085750848201515b5f19600385901b1c1916600184901b1784556101b8565b5f84815260208120601f198516915b8281101561024e578785015182556020948501946001909201910161022e565b508482101561026b57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b5f5f83546102878161013c565b60018216801561029e57600181146102b3576102e0565b60ff19831686528115158202860193506102e0565b865f5260205f205f5b838110156102d8578154888201526001909101906020016102bc565b505081860193505b509195945050505050565b60805160a05160c051610f326103155f395f6105f101525f6105bc01525f6101ba0152610f325ff3fe6080604052600436106100dc575f3560e01c806370a082311161007c578063a9059cbb11610057578063a9059cbb1461026c578063d0e30db01461028b578063d505accf14610293578063dd62ed3e146102b2575f5ffd5b806370a08231146102025780637ecebe001461022d57806395d89b4114610258575f5ffd5b806323b872dd116100b757806323b872dd1461016b5780632e1a7d4d1461018a578063313ce567146101a95780633644e515146101ee575f5ffd5b806306fdde03146100ef578063095ea7b31461011957806318160ddd14610148575f5ffd5b366100eb576100e96102e8565b005b5f5ffd5b3480156100fa575f5ffd5b50610103610329565b6040516101109190610bd3565b60405180910390f35b348015610124575f5ffd5b50610138610133366004610c4e565b6103b4565b6040519015158152602001610110565b348015610153575f5ffd5b5061015d60025481565b604051908152602001610110565b348015610176575f5ffd5b50610138610185366004610c76565b61042d565b348015610195575f5ffd5b506100e96101a4366004610cb0565b61056d565b3480156101b4575f5ffd5b506101dc7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610110565b3480156101f9575f5ffd5b5061015d6105b9565b34801561020d575f5ffd5b5061015d61021c366004610cc7565b60036020525f908152604090205481565b348015610238575f5ffd5b5061015d610247366004610cc7565b60056020525f908152604090205481565b348015610263575f5ffd5b50610103610613565b348015610277575f5ffd5b50610138610286366004610c4e565b610620565b6100e96102e8565b34801561029e575f5ffd5b506100e96102ad366004610ce7565b6106a3565b3480156102bd575f5ffd5b5061015d6102cc366004610d54565b600460209081525f928352604080842090915290825290205481565b6102f233346109c1565b60405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b5f805461033590610d85565b80601f016020809104026020016040519081016040528092919081815260200182805461036190610d85565b80156103ac5780601f10610383576101008083540402835291602001916103ac565b820191905f5260205f20905b81548152906001019060200180831161038f57829003601f168201915b505050505081565b335f81815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061041b9086815260200190565b60405180910390a35060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff83165f9081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104bf5761048e8382610e03565b73ffffffffffffffffffffffffffffffffffffffff86165f9081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff85165f90815260036020526040812080548592906104f3908490610e03565b909155505073ffffffffffffffffffffffffffffffffffffffff8085165f81815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061055a9087815260200190565b60405180910390a3506001949350505050565b6105773382610a38565b60405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a26105b63382610ac4565b50565b5f7f000000000000000000000000000000000000000000000000000000000000000046146105ee576105e9610b3b565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001805461033590610d85565b335f90815260036020526040812080548391908390610640908490610e03565b909155505073ffffffffffffffffffffffffffffffffffffffff83165f81815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061041b9086815260200190565b42841015610712576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b5f600161071d6105b9565b73ffffffffffffffffffffffffffffffffffffffff8a81165f8181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f84529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561086b573d5f5f3e3d5ffd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116158015906108e657508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61094c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152606401610709565b73ffffffffffffffffffffffffffffffffffffffff9081165f9081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b8060025f8282546109d29190610e16565b909155505073ffffffffffffffffffffffffffffffffffffffff82165f818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff82165f9081526003602052604081208054839290610a6c908490610e03565b90915550506002805482900390556040518181525f9073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610a2c565b5f5f5f5f5f85875af1905080610b36576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4554485f5452414e534645525f4641494c4544000000000000000000000000006044820152606401610709565b505050565b5f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f5f604051610b6b9190610e29565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011684010191505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c49575f5ffd5b919050565b5f5f60408385031215610c5f575f5ffd5b610c6883610c26565b946020939093013593505050565b5f5f5f60608486031215610c88575f5ffd5b610c9184610c26565b9250610c9f60208501610c26565b929592945050506040919091013590565b5f60208284031215610cc0575f5ffd5b5035919050565b5f60208284031215610cd7575f5ffd5b610ce082610c26565b9392505050565b5f5f5f5f5f5f5f60e0888a031215610cfd575f5ffd5b610d0688610c26565b9650610d1460208901610c26565b95506040880135945060608801359350608088013560ff81168114610d37575f5ffd5b9699959850939692959460a0840135945060c09093013592915050565b5f5f60408385031215610d65575f5ffd5b610d6e83610c26565b9150610d7c60208401610c26565b90509250929050565b600181811c90821680610d9957607f821691505b602082108103610dd0577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8181038181111561042757610427610dd6565b8082018082111561042757610427610dd6565b5f5f83545f8160011c90506001821680610e4457607f821691505b602082108103610e7b577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b808015610e8f5760018114610ec257610ef0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0084168752821515830287019450610ef0565b5f888152602090205f5b84811015610ee857815489820152600190910190602001610ecc565b505082870194505b5092969550505050505056fea2646970667358221220f082566a493e27595b59ab41457993f6c7bd4f00d3e028d5bf3a237c1648d04164736f6c634300081d0033";
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
