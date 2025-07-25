import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace LibDiamond {
    type FacetCutStruct = {
        facetAddress: PromiseOrValue<string>;
        action: PromiseOrValue<BigNumberish>;
        functionSelectors: PromiseOrValue<BytesLike>[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface DiamondCutFacetInterface extends utils.Interface {
    functions: {
        "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "diamondCut"): FunctionFragment;
    encodeFunctionData(functionFragment: "diamondCut", values: [
        LibDiamond.FacetCutStruct[],
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    events: {
        "DiamondCut(tuple[],address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
}
export interface DiamondCutEventObject {
    _diamondCut: LibDiamond.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export type DiamondCutEvent = TypedEvent<[
    LibDiamond.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface DiamondCutFacet extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DiamondCutFacetInterface;
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
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DiamondCut(tuple[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
    };
    estimateGas: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: PromiseOrValue<string>, _calldata: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
