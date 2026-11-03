import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AttestedBridgeFacet, AttestedBridgeFacetInterface } from "../AttestedBridgeFacet";
type AttestedBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AttestedBridgeFacet__factory extends ContractFactory {
    constructor(...args: AttestedBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AttestedBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AttestedBridgeFacet;
    connect(signer: Signer): AttestedBridgeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506107f58061001c5f395ff3fe608060405260043610610033575f3560e01c8063be3d05be14610037578063c8f3924f1461004c578063cb82a010146100cf575b5f5ffd5b61004a61004536600461064a565b6100ee565b005b348015610057575f5ffd5b506100bb6100663660046106ea565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fa65510ccf2f26bc0486cd7df8ca0e19edd8a36af016ce1cc1e387b8796c7b447602052604090205460ff1690565b604051901515815260200160405180910390f35b3480156100da575f5ffd5b5061004a6100e936600461070a565b610355565b6004831015610129576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6101348486610743565b905061018f817fffffffff00000000000000000000000000000000000000000000000000000000165f9081527fa65510ccf2f26bc0486cd7df8ca0e19edd8a36af016ce1cc1e387b8796c7b447602052604090205460ff1690565b6101c5576040517f534e71fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000081165f9081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c602052604090205473ffffffffffffffffffffffffffffffffffffffff1680610262576040517fa9ad62f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6102a16040518060400160405280600e81526020017f4272696467654174746573746572000000000000000000000000000000000000815250610363565b90508073ffffffffffffffffffffffffffffffffffffffff163b5f036102f3576040517f0d13f4a600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fa0d700fd000000000000000000000000000000000000000000000000000000009036805f83375f5f8a8c8501885af4610332573d5f833e3d82fd5b8282525f5f82845f885af1610349573d5f833e3d82fd5b50505050505050505050565b61035f82826103bf565b5050565b5f7fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da16040516103939084906107a9565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1692915050565b6103c7610590565b7fffffffff0000000000000000000000000000000000000000000000000000000082167fbe3d05be00000000000000000000000000000000000000000000000000000000148061045857507fffffffff0000000000000000000000000000000000000000000000000000000082167fcb82a01000000000000000000000000000000000000000000000000000000000145b806104a457507fffffffff0000000000000000000000000000000000000000000000000000000082167fc8f3924f00000000000000000000000000000000000000000000000000000000145b156104db576040517f2b73e4af00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7fffffffff0000000000000000000000000000000000000000000000000000000082165f8181527fa65510ccf2f26bc0486cd7df8ca0e19edd8a36af016ce1cc1e387b8796c7b447602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016851515908117909155825190815291517fe8956c674ed927fa5048c0490343fd4361248a75e0868db27a01848e0ecf58a29281900390910190a25050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610603576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f5f83601f840112610615575f5ffd5b50813567ffffffffffffffff81111561062c575f5ffd5b602083019150836020828501011115610643575f5ffd5b9250929050565b5f5f5f5f6040858703121561065d575f5ffd5b843567ffffffffffffffff811115610673575f5ffd5b61067f87828801610605565b909550935050602085013567ffffffffffffffff81111561069e575f5ffd5b6106aa87828801610605565b95989497509550505050565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146106e5575f5ffd5b919050565b5f602082840312156106fa575f5ffd5b610703826106b6565b9392505050565b5f5f6040838503121561071b575f5ffd5b610724836106b6565b915060208301358015158114610738575f5ffd5b809150509250929050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156107a2577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f82518060208501845e5f92019182525091905056fea264697066735822122020026a7ffe5c1f0b4070b45b52009362d03f772a417579730e3827946158b34b64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "isAttestableSelector";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAttestableSelector";
        readonly inputs: readonly [{
            readonly name: "_selector";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }, {
            readonly name: "_enabled";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeAttested";
        readonly inputs: readonly [{
            readonly name: "_facetCalldata";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AttestableSelectorSet";
        readonly inputs: readonly [{
            readonly name: "selector";
            readonly type: "bytes4";
            readonly indexed: true;
            readonly internalType: "bytes4";
        }, {
            readonly name: "enabled";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AttesterNotRegistered";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FunctionDoesNotExist";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "GatewaySelectorNotAttestable";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SelectorNotAttestable";
        readonly inputs: readonly [];
    }];
    static createInterface(): AttestedBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AttestedBridgeFacet;
}
export {};
