import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISymbiosisMetaRouter {
    type MetaRouteTransactionStruct = {
        firstSwapCalldata: BytesLike;
        secondSwapCalldata: BytesLike;
        approvedTokens: string[];
        firstDexRouter: string;
        secondDexRouter: string;
        amount: BigNumberish;
        nativeIn: boolean;
        relayRecipient: string;
        otherSideCalldata: BytesLike;
    };
    type MetaRouteTransactionStructOutput = [
        string,
        string,
        string[],
        string,
        string,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        firstSwapCalldata: string;
        secondSwapCalldata: string;
        approvedTokens: string[];
        firstDexRouter: string;
        secondDexRouter: string;
        amount: BigNumber;
        nativeIn: boolean;
        relayRecipient: string;
        otherSideCalldata: string;
    };
}
export interface ISymbiosisMetaRouterInterface extends utils.Interface {
    functions: {
        "metaRoute((bytes,bytes,address[],address,address,uint256,bool,address,bytes))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "metaRoute"): FunctionFragment;
    encodeFunctionData(functionFragment: "metaRoute", values: [ISymbiosisMetaRouter.MetaRouteTransactionStruct]): string;
    decodeFunctionResult(functionFragment: "metaRoute", data: BytesLike): Result;
    events: {};
}
export interface ISymbiosisMetaRouter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISymbiosisMetaRouterInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        metaRoute(_metarouteTransaction: ISymbiosisMetaRouter.MetaRouteTransactionStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    metaRoute(_metarouteTransaction: ISymbiosisMetaRouter.MetaRouteTransactionStruct, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        metaRoute(_metarouteTransaction: ISymbiosisMetaRouter.MetaRouteTransactionStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        metaRoute(_metarouteTransaction: ISymbiosisMetaRouter.MetaRouteTransactionStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        metaRoute(_metarouteTransaction: ISymbiosisMetaRouter.MetaRouteTransactionStruct, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISymbiosisMetaRouter.d.ts.map