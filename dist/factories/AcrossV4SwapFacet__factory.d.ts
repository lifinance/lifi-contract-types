import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossV4SwapFacet, AcrossV4SwapFacetInterface } from "../AcrossV4SwapFacet";
type AcrossV4SwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossV4SwapFacet__factory extends ContractFactory {
    constructor(...args: AcrossV4SwapFacetConstructorParams);
    deploy(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossV4SwapFacet>;
    getDeployTransaction(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossV4SwapFacet;
    connect(signer: Signer): AcrossV4SwapFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b506040516120e93803806120e983398101604081905261002e91610097565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cf565b6001600160a01b0381168114610094575f5ffd5b50565b5f5f604083850312156100a8575f5ffd5b82516100b381610080565b60208401519092506100c481610080565b809150509250929050565b60805160a051611fe66101035f395f81816068015261077d01525f818160c40152818161061401526107d40152611fe65ff3fe60806040526004361061003e575f3560e01c80631a40f9eb146100425780638021fef714610057578063991fe590146100b3578063b0996b1e146100e6575b5f5ffd5b61005561005036600461176f565b6100f9565b005b348015610062575f5ffd5b5061008a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100be575f5ffd5b5061008a7f000000000000000000000000000000000000000000000000000000000000000081565b6100556100f4366004611835565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610174576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610184344761189a565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab895f01518a60c001518a8a336104c8565b60c08a01526102ba898761060a565b50479050818111156102da576102da5f846102d5858561189a565b610872565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610372344761189a565b9050846103978160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ce576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361040b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610448576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610486576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049887608001518860c001516108a7565b6104a2878761060a565b50479050818111156104bd576104bd5f846102d5858561189a565b50505f909155505050565b5f82808203610503576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561051160018561189a565b818110610520576105206118d2565b905060200281019061053291906118ff565b61054390608081019060600161193b565b90505f61054f8261095b565b905073ffffffffffffffffffffffffffffffffffffffff821661057957610576348261189a565b90505b5f61058488886109a5565b90506105908888610aaf565b61059d8a89898985610b1b565b5f826105a88561095b565b6105b2919061189a565b9050898110156105fc576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61063d82608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610cdd565b604080516101a081019091525f610160820181815261018083018290528252906020810161066b848061195b565b610674906119a0565b815260200183602001602081019061068c919061193b565b73ffffffffffffffffffffffffffffffffffffffff1681526020016106b7606085016040860161193b565b73ffffffffffffffffffffffffffffffffffffffff1681526020016106e26080850160608601611a71565b60028111156106f3576106f3611a8f565b815260c0850151602082015260a084013560408201526060016107196080850185611abc565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509082525060200161076260e0850160c08601611b24565b1515815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660208301525f60409283015290517f110560ad0000000000000000000000000000000000000000000000000000000081529192507f0000000000000000000000000000000000000000000000000000000000000000169063110560ad90610809908490600401611ca8565b5f604051808303815f87803b158015610820575f5ffd5b505af1158015610832573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516108659190611dea565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff831661089c576108978282610d09565b505050565b610897838383610d76565b805f036108e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109395780341015610935576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61093573ffffffffffffffffffffffffffffffffffffffff8316333084610de4565b5f73ffffffffffffffffffffffffffffffffffffffff82161561099d5761099873ffffffffffffffffffffffffffffffffffffffff831630610e3c565b61099f565b475b92915050565b6060815f8167ffffffffffffffff8111156109c2576109c2611510565b6040519080825280602002602001820160405280156109eb578160200160208202803683370190505b5090505f5f5b83811015610aa457868682818110610a0b57610a0b6118d2565b9050602002810190610a1d91906118ff565b610a2e90608081019060600161193b565b9150610a398261095b565b838281518110610a4b57610a4b6118d2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a9c5734838281518110610a8457610a846118d2565b60200260200101818151610a98919061189a565b9052505b6001016109f1565b509095945050505050565b5f5b818110156108975736838383818110610acc57610acc6118d2565b9050602002810190610ade91906118ff565b9050610af060e0820160c08301611b24565b15610b1257610b12610b08606083016040840161193b565b82608001356108a7565b50600101610ab1565b83838383825f5b81811015610cc357368a8a83818110610b3d57610b3d6118d2565b9050602002810190610b4f91906118ff565b9050610b7e610b64606083016040840161193b565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610be05750610be0610b97604083016020840161193b565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610bf75750610bf7610b97602083018361193b565b8015610c7a5750610c7a610c0e60a0830183611abc565b610c1c916004915f91611efd565b610c2591611f24565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610cb0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cba8c82610e6f565b50600101610b22565b5050610cd2848484845f6110e2565b505050505050505050565b6108978383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112f9565b73ffffffffffffffffffffffffffffffffffffffff8216610d56576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61093573ffffffffffffffffffffffffffffffffffffffff831682611426565b73ffffffffffffffffffffffffffffffffffffffff8216610dc3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089773ffffffffffffffffffffffffffffffffffffffff8416838361143f565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e2f57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610e87610e7f602083018361193b565b6017903b1190565b610ebd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610efc576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610f10610b64606085016040860161193b565b610f1a575f610f20565b82608001355b90505f610f3b610f36608086016060870161193b565b61095b565b9050815f03610f7157610f71610f57606086016040870161193b565b610f67604087016020880161193b565b8660800135610cdd565b5f80610f80602087018761193b565b73ffffffffffffffffffffffffffffffffffffffff1684610fa460a0890189611abc565b604051610fb2929190611f8a565b5f6040518083038185875af1925050503d805f8114610fec576040519150601f19603f3d011682016040523d82523d5f602084013e610ff1565b606091505b5091509150816110045761100481611488565b5f611018610f366080890160608a0161193b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861104960208a018a61193b565b61105960608b0160408c0161193b565b61106960808c0160608d0161193b565b8b6080013589871161107b5786611085565b6110858a8861189a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826110f160018261189a565b818110611100576111006118d2565b905060200281019061111291906118ff565b61112390608081019060600161193b565b90505f5f5f5f5f5f5f5b888110156112e95761114060018a61189a565b8110801561114f575088600114155b1561122a578d8d82818110611166576111666118d2565b905060200281019061117891906118ff565b61118990608081019060600161193b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461122a578a81815181106111d0576111d06118d2565b60200260200101516111e18761095b565b6111eb919061189a565b965073ffffffffffffffffffffffffffffffffffffffff86161561120f575f611211565b895b93508387111561122a5761122a868d6102d5878b61189a565b8d8d8281811061123c5761123c6118d2565b905060200281019061124e91906118ff565b61125f90606081019060400161193b565b945061126a8561095b565b925073ffffffffffffffffffffffffffffffffffffffff85161561128e575f611290565b895b915081831180156112cd57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156112e1576112e1858d6102d5858761189a565b60010161112d565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114205773ffffffffffffffffffffffffffffffffffffffff8316611362576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113d5573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113f99190611f99565b10156114205761142073ffffffffffffffffffffffffffffffffffffffff85168483611492565b50505050565b5f385f3884865af16109355763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661147f576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661147f575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661147f57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561156157611561611510565b60405290565b604051610160810167ffffffffffffffff8111828210171561156157611561611510565b5f82601f83011261159a575f5ffd5b8135602083015f5f67ffffffffffffffff8411156115ba576115ba611510565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff8211171561160757611607611510565b60405283815290508082840187101561161e575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461165d575f5ffd5b919050565b8035801515811461165d575f5ffd5b5f6101408284031215611682575f5ffd5b61168a61153d565b823581529050602082013567ffffffffffffffff8111156116a9575f5ffd5b6116b58482850161158b565b602083015250604082013567ffffffffffffffff8111156116d4575f5ffd5b6116e08482850161158b565b6040830152506116f26060830161163a565b60608201526117036080830161163a565b608082015261171460a0830161163a565b60a082015260c0828101359082015260e0808301359082015261173a6101008301611662565b61010082015261174d6101208301611662565b61012082015292915050565b5f60e08284031215611769575f5ffd5b50919050565b5f5f5f5f60608587031215611782575f5ffd5b843567ffffffffffffffff811115611798575f5ffd5b6117a487828801611671565b945050602085013567ffffffffffffffff8111156117c0575f5ffd5b8501601f810187136117d0575f5ffd5b803567ffffffffffffffff8111156117e6575f5ffd5b8760208260051b84010111156117fa575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561181d575f5ffd5b61182987828801611759565b91505092959194509250565b5f5f60408385031215611846575f5ffd5b823567ffffffffffffffff81111561185c575f5ffd5b61186885828601611671565b925050602083013567ffffffffffffffff811115611884575f5ffd5b61189085828601611759565b9150509250929050565b8181038181111561099f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611931575f5ffd5b9190910192915050565b5f6020828403121561194b575f5ffd5b6119548261163a565b9392505050565b5f82357ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffea1833603018112611931575f5ffd5b803563ffffffff8116811461165d575f5ffd5b5f61016082360312156119b1575f5ffd5b6119b9611567565b6119c28361163a565b815260208381013590820152604080840135908201526119e46060840161163a565b60608201526080838101359082015260a0808401359082015260c08084013590820152611a1360e0840161198d565b60e0820152611a25610100840161198d565b610100820152611a38610120840161198d565b61012082015261014083013567ffffffffffffffff811115611a58575f5ffd5b611a643682860161158b565b6101408301525092915050565b5f60208284031215611a81575f5ffd5b813560038110611954575f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611aef575f5ffd5b83018035915067ffffffffffffffff821115611b09575f5ffd5b602001915036819003821315611b1d575f5ffd5b9250929050565b5f60208284031215611b34575f5ffd5b61195482611662565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b805173ffffffffffffffffffffffffffffffffffffffff16825260208101516020830152604081015160408301525f6060820151611bdf606085018273ffffffffffffffffffffffffffffffffffffffff169052565b506080820151608084015260a082015160a084015260c082015160c084015260e0820151611c1560e085018263ffffffff169052565b50610100820151611c2f61010085018263ffffffff169052565b50610120820151611c4961012085018263ffffffff169052565b50610140820151610160610140850152611c67610160850182611b3d565b949350505050565b60038110611ca4577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b60208082528251805183830152015173ffffffffffffffffffffffffffffffffffffffff1660408201525f60208301516101806060840152611cee6101a0840182611b89565b90506040840151611d17608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50606084015173ffffffffffffffffffffffffffffffffffffffff1660a08401526080840151611d4a60c0850182611c6f565b5060a084015160e084015260c084015161010084015260e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301610120850152611d9a8282611b3d565b915050610100840151611db261014085018215159052565b5061012084015173ffffffffffffffffffffffffffffffffffffffff1661016084015261014090930151610180909201919091525090565b60208152815160208201525f60208301516101406040840152611e11610160840182611b3d565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611e4c8282611b3d565b9150506060840151611e76608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611ee561012085018215159052565b50610120840151801515610140850152509392505050565b5f5f85851115611f0b575f5ffd5b83861115611f17575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f83577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611fa9575f5ffd5b505191905056fea2646970667358221220d85be45b84316f243f196f2a0693c88e0c753357857887271c9eb80922a82f6564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePoolPeriphery";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }, {
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL_PERIPHERY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableProportionalAdjustment";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "enableProportionalAdjustment";
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
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossV4SwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossV4SwapFacet;
}
export {};
