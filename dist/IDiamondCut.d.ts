import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace LibDiamond {
    type FacetCutStruct = {
        facetAddress: string;
        action: BigNumberish;
        functionSelectors: BytesLike[];
    };
    type FacetCutStructOutput = [string, number, string[]] & {
        facetAddress: string;
        action: number;
        functionSelectors: string[];
    };
}
export interface IDiamondCutInterface extends utils.Interface {
    functions: {
        "diamondCut((address,uint8,bytes4[])[],address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "diamondCut"): FunctionFragment;
    encodeFunctionData(functionFragment: "diamondCut", values: [LibDiamond.FacetCutStruct[], string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "diamondCut", data: BytesLike): Result;
    events: {
        "DiamondCut((address,uint8,bytes4[])[],address,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DiamondCut"): EventFragment;
}
export interface DiamondCutEventObject {
    _diamondCut: LibDiamond.FacetCutStructOutput[];
    _init: string;
    _calldata: string;
}
export declare type DiamondCutEvent = TypedEvent<[
    LibDiamond.FacetCutStructOutput[],
    string,
    string
], DiamondCutEventObject>;
export declare type DiamondCutEventFilter = TypedEventFilter<DiamondCutEvent>;
export interface IDiamondCut extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDiamondCutInterface;
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
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: string, _calldata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: string, _calldata: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: string, _calldata: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DiamondCut((address,uint8,bytes4[])[],address,bytes)"(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
        DiamondCut(_diamondCut?: null, _init?: null, _calldata?: null): DiamondCutEventFilter;
    };
    estimateGas: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: string, _calldata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        diamondCut(_diamondCut: LibDiamond.FacetCutStruct[], _init: string, _calldata: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
