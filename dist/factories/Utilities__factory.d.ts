import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Utilities, UtilitiesInterface } from "../Utilities";
declare type UtilitiesConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Utilities__factory extends ContractFactory {
    constructor(...args: UtilitiesConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Utilities>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Utilities;
    connect(signer: Signer): Utilities__factory;
    static readonly bytecode = "0x6000805460ff19166001908117909155737109709ecfa91a80626ff3989d68f67f5b1dd12d6080526b75736572206164647265737360a01b60c052600c60a05260cc6040527ffadd6953a0436e85528ded789af2e2b7e57c1cd7c68c5c3796d8ea67e0018db7905534801561007357600080fd5b5060805161075861009660003960008181610237015261048501526107586000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ba414fa611610050578063ba414fa6146100df578063f82de7b0146100f7578063fa7626d41461010c57600080fd5b8063792e11f51461006c578063b90a68fa14610095575b600080fd5b61007f61007a3660046104fa565b610119565b60405161008c9190610513565b60405180910390f35b6001805460408051602080820184905282518083038201815282840193849052805191012090935573ffffffffffffffffffffffffffffffffffffffff909116905260600161008c565b6100e76102e7565b604051901515815260200161008c565b61010a6101053660046104fa565b610447565b005b6000546100e79060ff1681565b606060008267ffffffffffffffff8111156101365761013661056d565b60405190808252806020026020018201604052801561015f578160200160208202803683370190505b50905060005b838110156102e05760003073ffffffffffffffffffffffffffffffffffffffff1663b90a68fa6040518163ffffffff1660e01b81526004016020604051808303816000875af11580156101bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e0919061059c565b6040517fc88a5e6d00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015268056bc75e2d6310000060248301529192507f00000000000000000000000000000000000000000000000000000000000000009091169063c88a5e6d90604401600060405180830381600087803b15801561027d57600080fd5b505af1158015610291573d6000803e3d6000fd5b50505050808383815181106102a8576102a86105d9565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015250806102d881610637565b915050610165565b5092915050565b60008054610100900460ff16156103075750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156104425760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c65640000000000000000000000000000000000000000000000000000828401528251808303840181526060830190935260009290916103ac917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc49160800161069f565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526103e4916106db565b6000604051808303816000865af19150503d8060008114610421576040519150601f19603f3d011682016040523d82523d6000602084013e610426565b606091505b509150508080602001905181019061043e91906106e7565b9150505b919050565b60006104538243610709565b6040517f1f7b4f30000000000000000000000000000000000000000000000000000000008152600481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631f7b4f3090602401600060405180830381600087803b1580156104de57600080fd5b505af11580156104f2573d6000803e3d6000fd5b505050505050565b60006020828403121561050c57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561056157835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161052f565b50909695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156105ae57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146105d257600080fd5b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361066857610668610608565b5060010190565b6000815160005b818110156106905760208185018101518683015201610676565b50600093019283525090919050565b7fffffffff000000000000000000000000000000000000000000000000000000008316815260006106d3600483018461066f565b949350505050565b60006105d2828461066f565b6000602082840312156106f957600080fd5b815180151581146105d257600080fd5b8082018082111561071c5761071c610608565b9291505056fea2646970667358221220eb06046ada5d95587a2a1e43b80d37af1962a385a9f6498d1631558c7ace7a7d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_TEST";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "createUsers";
        readonly inputs: readonly [{
            readonly name: "userNum";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address payable[]";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "failed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "getNextUserAddress";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "mineBlocks";
        readonly inputs: readonly [{
            readonly name: "numBlocks";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "log";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_address";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes32";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_int";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_address";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes32";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_string";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_string";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_uint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "logs";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): UtilitiesInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Utilities;
}
export {};
