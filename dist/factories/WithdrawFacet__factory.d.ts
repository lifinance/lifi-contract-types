import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class WithdrawFacet__factory extends ContractFactory {
    constructor(...args: WithdrawFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<WithdrawFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): WithdrawFacet;
    connect(signer: Signer): WithdrawFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506106f28061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80631458d7ad14610038578063d9caed121461004d575b5f5ffd5b61004b61004636600461059e565b610060565b005b61004b61005b366004610649565b61019f565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a6576100a66101f5565b5f6017873b11806100e3576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161010a929190610687565b5f604051808303815f865af19150503d805f8114610143576040519150601f19603f3d011682016040523d82523d5f602084013e610148565b606091505b509092505081156101635761015e858585610294565b610195565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101e5576101e56101f5565b6101f0838383610294565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610291576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b5f73ffffffffffffffffffffffffffffffffffffffff8316156102b757826102b9565b335b90506102c684828461031f565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff8316610344576101f0828261034f565b6101f08383836103c0565b73ffffffffffffffffffffffffffffffffffffffff821661039c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103bc73ffffffffffffffffffffffffffffffffffffffff83168261050b565b5050565b73ffffffffffffffffffffffffffffffffffffffff821661040d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610449575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156104ea576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af11580156104c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104e49190610696565b50505050565b6101f073ffffffffffffffffffffffffffffffffffffffff84168383610524565b5f385f3884865af16103bc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610564576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610291575f5ffd5b80356105998161056d565b919050565b5f5f5f5f5f5f60a087890312156105b3575f5ffd5b86356105be8161056d565b9550602087013567ffffffffffffffff8111156105d9575f5ffd5b8701601f810189136105e9575f5ffd5b803567ffffffffffffffff8111156105ff575f5ffd5b896020828401011115610610575f5ffd5b602091909101955093506106266040880161058e565b92506106346060880161058e565b95989497509295919493608090920135925050565b5f5f5f6060848603121561065b575f5ffd5b83356106668161056d565b925060208401356106768161056d565b929592945050506040919091013590565b818382375f9101908152919050565b5f602082840312156106a6575f5ffd5b815180151581146106b5575f5ffd5b939250505056fea2646970667358221220b67a8fe150081a4670f8e498142b1426784d1890fbf5845cf56e7e67b01fe13064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "LogWithdraw";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotAContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): WithdrawFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): WithdrawFacet;
}
export {};
