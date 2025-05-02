import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WithdrawFacet, WithdrawFacetInterface } from "../WithdrawFacet";
declare type WithdrawFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061073d8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80631458d7ad14610038578063d9caed121461004d575b5f5ffd5b61004b6100463660046105a3565b610060565b005b61004b61005b36600461064e565b6101a6565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a6576100a66101fc565b5f5f6100b18861029b565b9050806100ea576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff16878760405161011192919061068c565b5f604051808303815f865af19150503d805f811461014a576040519150601f19603f3d011682016040523d82523d5f602084013e61014f565b606091505b5090925050811561016a57610165858585610376565b61019c565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101ec576101ec6101fc565b6101f7838383610376565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610298576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6040805160038082528183019092525f91829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060035f60208401893c863f93505f61031f8361069b565b90507fffffff00000000000000000000000000000000000000000000000000000000008085169082160361035b57506001979650505050505050565b5f8611801561036a5750818514155b98975050505050505050565b5f73ffffffffffffffffffffffffffffffffffffffff831615610399578261039b565b335b90506103a8848284610401565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff8316610426576101f78282610431565b6101f78383836104a2565b73ffffffffffffffffffffffffffffffffffffffff821661047e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049e73ffffffffffffffffffffffffffffffffffffffff831682610510565b5050565b73ffffffffffffffffffffffffffffffffffffffff82166104ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6101f773ffffffffffffffffffffffffffffffffffffffff84168383610529565b5f385f3884865af161049e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610569576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610298575f5ffd5b803561059e81610572565b919050565b5f5f5f5f5f5f60a087890312156105b8575f5ffd5b86356105c381610572565b9550602087013567ffffffffffffffff8111156105de575f5ffd5b8701601f810189136105ee575f5ffd5b803567ffffffffffffffff811115610604575f5ffd5b896020828401011115610615575f5ffd5b6020919091019550935061062b60408801610593565b925061063960608801610593565b95989497509295919493608090920135925050565b5f5f5f60608486031215610660575f5ffd5b833561066b81610572565b9250602084013561067b81610572565b929592945050506040919091013590565b818382375f9101908152919050565b805160208201517fffffff0000000000000000000000000000000000000000000000000000000000811691906003821015610700577fffffff0000000000000000000000000000000000000000000000000000000000808360030360031b1b82161692505b505091905056fea2646970667358221220ff19a73cc63639af24d688a1e933167259ffaa6fc6f2dd545d1918f0f12d9d3664736f6c634300081d0033";
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
