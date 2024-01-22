import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ICREATE3Factory, ICREATE3FactoryInterface } from "../ICREATE3Factory";
export declare class ICREATE3Factory__factory {
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "deploy";
        readonly inputs: readonly [{
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "creationCode";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "deployed";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getDeployed";
        readonly inputs: readonly [{
            readonly name: "deployer";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "deployed";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }];
    static createInterface(): ICREATE3FactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ICREATE3Factory;
}
