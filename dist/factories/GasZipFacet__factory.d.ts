import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611d2c380380611d2c833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611c826100aa5f395f8181606d01526107cc0152611c825ff3fe608060405260043610610058575f3560e01c8063606326ff11610041578063606326ff146100e6578063b49d391d146100fb578063fc5f100314610122575f5ffd5b8063194c869f1461005c57806346fd98e2146100b9575b5f5ffd5b348015610067575f5ffd5b5061008f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100c4575f5ffd5b506100d86100d33660046115a3565b610135565b6040519081526020016100b0565b6100f96100f4366004611817565b6101c1565b005b348015610106575f5ffd5b5061008f7311f111f111f111f111f111f111f111f111f111f181565b6100f9610130366004611893565b6103ab565b5f816010811115610172576040517f1ee194c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b818110156101b95784848281811061018e5761018e6118df565b90506020020160208101906101a3919061190c565b60ff16601084901b179250806001019050610174565b505092915050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161023c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61024c3447611933565b90508680610100015161028b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156102c9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61032588886102d9600182611933565b8181106102e8576102e86118df565b90506020028101906102fa919061196b565b61030b9060808101906060016119a7565b73ffffffffffffffffffffffffffffffffffffffff161590565b61035b576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61036f895f01518a60c001518a8a33610549565b60c08a015261037e898761068b565b504790508181111561039e5761039e5f846103998585611933565b610874565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610426576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100830151839015610469576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83806101200151156104a7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015173ffffffffffffffffffffffffffffffffffffffff16156104f9576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8460c001513414610536576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610540858561068b565b50505f90555050565b5f82808203610584576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610592600185611933565b8181106105a1576105a16118df565b90506020028101906105b3919061196b565b6105c49060808101906060016119a7565b90505f6105d0826108a9565b905073ffffffffffffffffffffffffffffffffffffffff82166105fa576105f73482611933565b90505b5f61060588886108f3565b905061061188886109fd565b61061e8a89898985610a69565b5f82610629856108a9565b6106339190611933565b90508981101561067d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80356106c3576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061071a57508160a0015160601b6bffffffffffffffffffffffff1916815f013514155b15610751576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361078e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08201516040517fc9630cb000000000000000000000000000000000000000000000000000000000815260208301356004820152823560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163c9630cb0916044015f604051808303818588803b158015610822575f5ffd5b505af1158015610834573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108689190611a0c565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661089e576108998282610dfa565b505050565b610899838383610e6b565b5f73ffffffffffffffffffffffffffffffffffffffff8216156108eb576108e673ffffffffffffffffffffffffffffffffffffffff831630610ed9565b6108ed565b475b92915050565b6060815f8167ffffffffffffffff811115610910576109106115e2565b604051908082528060200260200182016040528015610939578160200160208202803683370190505b5090505f805b838110156109f257868682818110610959576109596118df565b905060200281019061096b919061196b565b61097c9060808101906060016119a7565b9150610987826108a9565b838281518110610999576109996118df565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166109ea57348382815181106109d2576109d26118df565b602002602001018181516109e69190611933565b9052505b60010161093f565b509095945050505050565b5f5b818110156108995736838383818110610a1a57610a1a6118df565b9050602002810190610a2c919061196b565b9050610a3e60e0820160c08301611b1f565b15610a6057610a60610a5660608301604084016119a7565b8260800135610f0c565b506001016109ff565b838383838260018114610d16575f8585610a84600185611933565b818110610a9357610a936118df565b9050602002810190610aa5919061196b565b610ab69060808101906060016119a7565b90505f89815b81811015610c4357368d8d83818110610ad757610ad76118df565b9050602002810190610ae9919061196b565b9050610afe61030b60608301604084016119a7565b80610b605750610b60610b1760408301602084016119a7565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610b775750610b77610b1760208301836119a7565b8015610bfa5750610bfa610b8e60a0830183611b38565b610b9c916004915f91611b99565b610ba591611bc0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c30576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3a8f82610fbc565b50600101610abc565b505f90505b610c53600185611933565b811015610d0e575f888883818110610c6d57610c6d6118df565b9050602002810190610c7f919061196b565b610c909060808101906060016119a7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d0557858281518110610cd757610cd76118df565b6020026020010151610ce8826108a9565b610cf29190611933565b92508215610d0557610d05818885610874565b50600101610c48565b505050610dee565b875f5b81811015610deb57368b8b83818110610d3457610d346118df565b9050602002810190610d46919061196b565b9050610d5b61030b60608301604084016119a7565b80610d745750610d74610b1760408301602084016119a7565b8015610d8b5750610d8b610b1760208301836119a7565b8015610da25750610da2610b8e60a0830183611b38565b610dd8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610de28d82610fbc565b50600101610d19565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e47576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e6773ffffffffffffffffffffffffffffffffffffffff83168261122c565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216610eb8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089973ffffffffffffffffffffffffffffffffffffffff84168383611245565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03610f45576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f9a5780341015610e67576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e6773ffffffffffffffffffffffffffffffffffffffff831633308461128e565b610fd1610fcc60208301836119a7565b6112e6565b611007576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611046576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61105a61030b60608501604086016119a7565b611064575f61106a565b82608001355b90505f61108561108060808601606087016119a7565b6108a9565b9050815f036110bb576110bb6110a160608601604087016119a7565b6110b160408701602088016119a7565b866080013561137a565b5f806110ca60208701876119a7565b73ffffffffffffffffffffffffffffffffffffffff16846110ee60a0890189611b38565b6040516110fc929190611c26565b5f6040518083038185875af1925050503d805f8114611136576040519150601f19603f3d011682016040523d82523d5f602084013e61113b565b606091505b50915091508161114e5761114e816113a6565b5f6111626110806080890160608a016119a7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861119360208a018a6119a7565b6111a360608b0160408c016119a7565b6111b360808c0160608d016119a7565b8b608001358987116111c557866111cf565b6111cf8a88611933565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b5f385f3884865af1610e675763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611285576390b8ec185f526004601cfd5b5f603452505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112d957637939f4245f526004601cfd5b5f60605260405250505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161137157506023015160601c3b151592915050565b5050503b151590565b6108998383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113b0565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156114d75773ffffffffffffffffffffffffffffffffffffffff8316611419576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561148c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114b09190611c35565b10156114d7576114d773ffffffffffffffffffffffffffffffffffffffff851684836114dd565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611285575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661128557633e3f8f735f526004601cfd5b5f5f83601f84011261156b575f5ffd5b50813567ffffffffffffffff811115611582575f5ffd5b6020830191508360208260051b850101111561159c575f5ffd5b9250929050565b5f5f602083850312156115b4575f5ffd5b823567ffffffffffffffff8111156115ca575f5ffd5b6115d68582860161155b565b90969095509350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611633576116336115e2565b60405290565b5f82601f830112611648575f5ffd5b813567ffffffffffffffff811115611662576116626115e2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156116af576116af6115e2565b6040528181528382016020018510156116c6575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611705575f5ffd5b919050565b80358015158114611705575f5ffd5b5f610140828403121561172a575f5ffd5b61173261160f565b823581529050602082013567ffffffffffffffff811115611751575f5ffd5b61175d84828501611639565b602083015250604082013567ffffffffffffffff81111561177c575f5ffd5b61178884828501611639565b60408301525061179a606083016116e2565b60608201526117ab608083016116e2565b60808201526117bc60a083016116e2565b60a082015260c0828101359082015260e080830135908201526117e2610100830161170a565b6101008201526117f5610120830161170a565b61012082015292915050565b5f60408284031215611811575f5ffd5b50919050565b5f5f5f5f6080858703121561182a575f5ffd5b843567ffffffffffffffff811115611840575f5ffd5b61184c87828801611719565b945050602085013567ffffffffffffffff811115611868575f5ffd5b6118748782880161155b565b909450925061188890508660408701611801565b905092959194509250565b5f5f606083850312156118a4575f5ffd5b823567ffffffffffffffff8111156118ba575f5ffd5b6118c685828601611719565b9250506118d68460208501611801565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561191c575f5ffd5b813560ff8116811461192c575f5ffd5b9392505050565b818103818111156108ed577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261199d575f5ffd5b9190910192915050565b5f602082840312156119b7575f5ffd5b61192c826116e2565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611a336101608401826119c0565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a6e82826119c0565b9150506060840151611a98608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611b0761012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611b2f575f5ffd5b61192c8261170a565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b6b575f5ffd5b83018035915067ffffffffffffffff821115611b85575f5ffd5b60200191503681900382131561159c575f5ffd5b5f5f85851115611ba7575f5ffd5b83861115611bb3575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611c1f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611c45575f5ffd5b505191905056fea26469706673582212203be7f7ad09a5edbd1ee1be27506da66a32f31ee26abdceea7839c7486f4cf4be64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "GAS_ZIP_ROUTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "NON_EVM_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TooManyChainIds";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
