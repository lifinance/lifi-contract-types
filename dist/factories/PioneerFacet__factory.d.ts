import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PioneerFacet, PioneerFacetInterface } from "../PioneerFacet";
declare type PioneerFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PioneerFacet__factory extends ContractFactory {
    constructor(...args: PioneerFacetConstructorParams);
    deploy(pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PioneerFacet>;
    getDeployTransaction(pioneerAddress: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PioneerFacet;
    connect(signer: Signer): PioneerFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611b3f380380611b3f833981016040819052602b916061565b6001600160a01b038116605157604051637a664d1160e11b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b608051611a956100aa5f395f8181605d01526105c20152611a955ff3fe608060405260043610610033575f3560e01c806307efe4f7146100375780631a7c5c4b1461004c57806327aa2634146100a8575b5f5ffd5b61004a610045366004611636565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611670565b6102de565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761170b565b90508361016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102aa87608001518860c00151610504565b6102b3876105b8565b5047915050818111156102d4576102d45f846102cf858561170b565b610625565b50505f9091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610359576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610369344761170b565b9050858061010001516103a8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156103e6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104098160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610440576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ba576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ce895f01518a60c001518a8a3361065a565b60c08a01526104dc896105b8565b5047915050818111156104f8576104f85f846102cf858561170b565b50505f90915550505050565b805f0361053d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105965780341015610592576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61059273ffffffffffffffffffffffffffffffffffffffff831633308461079d565b6105eb81608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610625565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18160405161061a919061178f565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831661064f5761064a82826107f5565b505050565b61064a838383610862565b5f82808203610695576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856106a360018561170b565b8181106106b2576106b26118a2565b90506020028101906106c491906118cf565b6106d590608081019060600161190b565b90505f6106e1826108d0565b905073ffffffffffffffffffffffffffffffffffffffff821661070b57610708348261170b565b90505b5f610716888861091a565b90506107228888610a24565b61072f8a89898985610a90565b5f8261073a856108d0565b610744919061170b565b90508981101561078f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166107e857637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216610842576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059273ffffffffffffffffffffffffffffffffffffffff831682610e3b565b73ffffffffffffffffffffffffffffffffffffffff82166108af576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61064a73ffffffffffffffffffffffffffffffffffffffff84168383610e54565b5f73ffffffffffffffffffffffffffffffffffffffff8216156109125761090d73ffffffffffffffffffffffffffffffffffffffff831630610e9d565b610914565b475b92915050565b6060815f8167ffffffffffffffff81111561093757610937611417565b604051908082528060200260200182016040528015610960578160200160208202803683370190505b5090505f805b83811015610a1957868682818110610980576109806118a2565b905060200281019061099291906118cf565b6109a390608081019060600161190b565b91506109ae826108d0565b8382815181106109c0576109c06118a2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a1157348382815181106109f9576109f96118a2565b60200260200101818151610a0d919061170b565b9052505b600101610966565b509095945050505050565b5f5b8181101561064a5736838383818110610a4157610a416118a2565b9050602002810190610a5391906118cf565b9050610a6560e0820160c0830161192b565b15610a8757610a87610a7d606083016040840161190b565b8260800135610504565b50600101610a26565b838383838260018114610d57575f8585610aab60018561170b565b818110610aba57610aba6118a2565b9050602002810190610acc91906118cf565b610add90608081019060600161190b565b90505f89815b81811015610c8457368d8d83818110610afe57610afe6118a2565b9050602002810190610b1091906118cf565b9050610b3f610b25606083016040840161190b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ba15750610ba1610b58604083016020840161190b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610bb85750610bb8610b58602083018361190b565b8015610c3b5750610c3b610bcf60a0830183611944565b610bdd916004915f916119ac565b610be6916119d3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c71576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c7b8f82610ed0565b50600101610ae3565b505f90505b610c9460018561170b565b811015610d4f575f888883818110610cae57610cae6118a2565b9050602002810190610cc091906118cf565b610cd190608081019060600161190b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610d4657858281518110610d1857610d186118a2565b6020026020010151610d29826108d0565b610d33919061170b565b92508215610d4657610d46818885610625565b50600101610c89565b505050610e2f565b875f5b81811015610e2c57368b8b83818110610d7557610d756118a2565b9050602002810190610d8791906118cf565b9050610d9c610b25606083016040840161190b565b80610db55750610db5610b58604083016020840161190b565b8015610dcc5750610dcc610b58602083018361190b565b8015610de35750610de3610bcf60a0830183611944565b610e19576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e238d82610ed0565b50600101610d5a565b50505b50505050505050505050565b5f385f3884865af16105925763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e94576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610ee5610ee0602083018361190b565b6111a2565b610f1b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610f5a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610f6e610b25606085016040860161190b565b610f78575f610f7e565b82608001355b90505f610f99610f94606086016040870161190b565b6108d0565b90505f610faf610f94608087016060880161190b565b9050825f03610fe557610fe5610fcb606087016040880161190b565b610fdb604088016020890161190b565b8760800135611236565b8460800135821015611030576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610786565b5f8061103f602088018861190b565b73ffffffffffffffffffffffffffffffffffffffff168561106360a08a018a611944565b604051611071929190611a39565b5f6040518083038185875af1925050503d805f81146110ab576040519150601f19603f3d011682016040523d82523d5f602084013e6110b0565b606091505b5091509150816110c3576110c381611262565b5f6110d7610f9460808a0160608b0161190b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961110860208b018b61190b565b61111860608c0160408d0161190b565b61112860808d0160608e0161190b565b8c6080013589871161113a5786611144565b6111448a8861170b565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161122d57506023015160601c3b151592915050565b5050503b151590565b61064a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61126c565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156113935773ffffffffffffffffffffffffffffffffffffffff83166112d5576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611348573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061136c9190611a48565b10156113935761139373ffffffffffffffffffffffffffffffffffffffff85168483611399565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716610e94575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716610e9457633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561146857611468611417565b60405290565b5f82601f83011261147d575f5ffd5b813567ffffffffffffffff81111561149757611497611417565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156114e4576114e4611417565b6040528181528382016020018510156114fb575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461153a575f5ffd5b919050565b8035801515811461153a575f5ffd5b5f610140828403121561155f575f5ffd5b611567611444565b823581529050602082013567ffffffffffffffff811115611586575f5ffd5b6115928482850161146e565b602083015250604082013567ffffffffffffffff8111156115b1575f5ffd5b6115bd8482850161146e565b6040830152506115cf60608301611517565b60608201526115e060808301611517565b60808201526115f160a08301611517565b60a082015260c0828101359082015260e08083013590820152611617610100830161153f565b61010082015261162a610120830161153f565b61012082015292915050565b5f60208284031215611646575f5ffd5b813567ffffffffffffffff81111561165c575f5ffd5b6116688482850161154e565b949350505050565b5f5f5f60408486031215611682575f5ffd5b833567ffffffffffffffff811115611698575f5ffd5b6116a48682870161154e565b935050602084013567ffffffffffffffff8111156116c0575f5ffd5b8401601f810186136116d0575f5ffd5b803567ffffffffffffffff8111156116e6575f5ffd5b8660208260051b84010111156116fa575f5ffd5b939660209190910195509293505050565b81810381811115610914577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526117b6610160840182611743565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526117f18282611743565b915050606084015161181b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161188a61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611901575f5ffd5b9190910192915050565b5f6020828403121561191b575f5ffd5b61192482611517565b9392505050565b5f6020828403121561193b575f5ffd5b6119248261153f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611977575f5ffd5b83018035915067ffffffffffffffff821115611991575f5ffd5b6020019150368190038213156119a5575f5ffd5b9250929050565b5f5f858511156119ba575f5ffd5b838611156119c6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611a32577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611a58575f5ffd5b505191905056fea2646970667358221220c3efebdb1f1b55733e5e53fee049f9e9c1b422073e9c388ccdeb5dbf6d8b86d764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "pioneerAddress";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PIONEER_ADDRESS";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPioneer";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPioneer";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
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
        readonly name: "PioneerAddress0";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): PioneerFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PioneerFacet;
}
export {};
