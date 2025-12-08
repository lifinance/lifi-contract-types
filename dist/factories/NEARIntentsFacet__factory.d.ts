import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NEARIntentsFacet, NEARIntentsFacetInterface } from "../NEARIntentsFacet";
type NEARIntentsFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NEARIntentsFacet__factory extends ContractFactory {
    constructor(...args: NEARIntentsFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NEARIntentsFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NEARIntentsFacet;
    connect(signer: Signer): NEARIntentsFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516123e53803806123e5833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b6080516123416100a45f395f610b5401526123415ff3fe608060405260043610610033575f3560e01c8063295e6944146100375780638319662c1461004c578063cc67a1aa1461005f575b5f5ffd5b61004a610045366004611e65565b6100c0565b005b61004a61005a366004611f2b565b61047b565b34801561006a575f5ffd5b506100ac610079366004611f95565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815584825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff16156101b1576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156101ef576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6101fd6020840184611fac565b73ffffffffffffffffffffffffffffffffffffffff160361024a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561028957506020820135155b156102c0576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f6102cc3447611fcc565b90508980610100015161030b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610349576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b61036c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361041d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104278d8b61085c565b61043b8d5f01518e60c001518e8e33610bdf565b60c08e015261044a8d8b610d21565b50479150508181111561046b5761046b5f846104668585611fcc565b610db0565b50505f9094555050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104f6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561050383612004565b825f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f9081526020839052205490915060ff1615610574576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81606001354211156105b2576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105c06020840184611fac565b73ffffffffffffffffffffffffffffffffffffffff160361060d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561064c57506020820135155b15610683576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61068f3447611fcc565b905061069a88612004565b60a081015173ffffffffffffffffffffffffffffffffffffffff166106eb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610728576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610765576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076e89612004565b806101000151156107ab576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107b48a612004565b806101200151156107f1576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108036107fd8c612004565b8b61085c565b61082061081660a08d0160808e01611fac565b8c60c00135610de0565b61083261082c8c612004565b8b610d21565b50479150508181111561084e5761084e5f846104668585611fcc565b50505f909455505050505050565b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146108b35760a083015173ffffffffffffffffffffffffffffffffffffffff166108b9565b81602001355b835160c08501519192505f917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e9190846108f66020880188611fac565b60e0808a01516080808c015160408051602081019a909a52898101989098526060898101979097528882019590955273ffffffffffffffffffffffffffffffffffffffff93841660a089015260c088019190915291909216918501919091529086013561010084015290850135610120830152840135610140820152610160016040516020818303038152906040528051906020012090505f610a92604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610b5082610b1760a088018861200f565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610e9492505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610bd7576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b5f82808203610c1a576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610c28600185611fcc565b818110610c3757610c37612077565b9050602002810190610c4991906120a4565b610c5a906080810190606001611fac565b90505f610c6682610f38565b905073ffffffffffffffffffffffffffffffffffffffff8216610c9057610c8d3482611fcc565b90505b5f610c9b8888610f82565b9050610ca7888861108c565b610cb48a898989856110f8565b5f82610cbf85610f38565b610cc99190611fcc565b905089811015610d13576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6040808401355f908152602083815291902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080850151919250610da19190610d9790850185611fac565b8560c00151610db0565b610dab83836112ba565b505050565b73ffffffffffffffffffffffffffffffffffffffff8316610dd557610dab82826113fd565b610dab83838361146a565b805f03610e19576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e725780341015610e6e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610e6e73ffffffffffffffffffffffffffffffffffffffff83163330846114d8565b604051600190835f5260208301516040526040835103610ee857604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610f0c565b6041835103610f085760608301515f1a6020526040830151606052610f0c565b5f91505b6020600160805f855afa5191503d610f2b57638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f7a57610f7573ffffffffffffffffffffffffffffffffffffffff831630611530565b610f7c565b475b92915050565b6060815f8167ffffffffffffffff811115610f9f57610f9f611c30565b604051908082528060200260200182016040528015610fc8578160200160208202803683370190505b5090505f5f5b8381101561108157868682818110610fe857610fe8612077565b9050602002810190610ffa91906120a4565b61100b906080810190606001611fac565b915061101682610f38565b83828151811061102857611028612077565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611079573483828151811061106157611061612077565b602002602001018181516110759190611fcc565b9052505b600101610fce565b509095945050505050565b5f5b81811015610dab57368383838181106110a9576110a9612077565b90506020028101906110bb91906120a4565b90506110cd60e0820160c083016120e0565b156110ef576110ef6110e56060830160408401611fac565b8260800135610de0565b5060010161108e565b83838383825f5b818110156112a057368a8a8381811061111a5761111a612077565b905060200281019061112c91906120a4565b905061115b6111416060830160408401611fac565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111bd57506111bd6111746040830160208401611fac565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111d457506111d46111746020830183611fac565b801561125757506112576111eb60a083018361200f565b6111f9916004915f916120f9565b61120291612120565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61128d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112978c82611563565b506001016110ff565b50506112af848484845f6117d6565b505050505050505050565b6112c76020820182611fac565b8251608084015160c08501516040805173ffffffffffffffffffffffffffffffffffffffff938416815260208101929092526060808701358383015294909216939185013592917fabfaa867fe89bacdf772b7b4aa1700c6157ca41c551d443b5d81144aad19f754910160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036113c25760e0820151825160405160208481013582527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516113f191906121d2565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff821661144a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e6e73ffffffffffffffffffffffffffffffffffffffff8316826119ed565b73ffffffffffffffffffffffffffffffffffffffff82166114b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dab73ffffffffffffffffffffffffffffffffffffffff84168383611a06565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661152357637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61157b6115736020830183611fac565b6017903b1190565b6115b1576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115f0576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116046111416060850160408601611fac565b61160e575f611614565b82608001355b90505f61162f61162a6080860160608701611fac565b610f38565b9050815f036116655761166561164b6060860160408701611fac565b61165b6040870160208801611fac565b8660800135611a4f565b5f806116746020870187611fac565b73ffffffffffffffffffffffffffffffffffffffff168461169860a089018961200f565b6040516116a69291906122e5565b5f6040518083038185875af1925050503d805f81146116e0576040519150601f19603f3d011682016040523d82523d5f602084013e6116e5565b606091505b5091509150816116f8576116f881611a7b565b5f61170c61162a6080890160608a01611fac565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861173d60208a018a611fac565b61174d60608b0160408c01611fac565b61175d60808c0160608d01611fac565b8b6080013589871161176f5786611779565b6117798a88611fcc565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117e5600182611fcc565b8181106117f4576117f4612077565b905060200281019061180691906120a4565b611817906080810190606001611fac565b90505f5f5f5f5f5f5f5b888110156119dd5761183460018a611fcc565b81108015611843575088600114155b1561191e578d8d8281811061185a5761185a612077565b905060200281019061186c91906120a4565b61187d906080810190606001611fac565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461191e578a81815181106118c4576118c4612077565b60200260200101516118d587610f38565b6118df9190611fcc565b965073ffffffffffffffffffffffffffffffffffffffff861615611903575f611905565b895b93508387111561191e5761191e868d610466878b611fcc565b8d8d8281811061193057611930612077565b905060200281019061194291906120a4565b611953906060810190604001611fac565b945061195e85610f38565b925073ffffffffffffffffffffffffffffffffffffffff851615611982575f611984565b895b915081831180156119c157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119d5576119d5858d6104668587611fcc565b600101611821565b5050505050505050505050505050565b5f385f3884865af1610e6e5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a46576390b8ec185f526004601cfd5b5f603452505050565b610dab8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a85565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611bac5773ffffffffffffffffffffffffffffffffffffffff8316611aee576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b61573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b8591906122f4565b1015611bac57611bac73ffffffffffffffffffffffffffffffffffffffff85168483611bb2565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a46575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a4657633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c8157611c81611c30565b60405290565b5f82601f830112611c96575f5ffd5b813567ffffffffffffffff811115611cb057611cb0611c30565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611cfd57611cfd611c30565b604052818152838201602001851015611d14575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d53575f5ffd5b919050565b80358015158114611d53575f5ffd5b5f6101408284031215611d78575f5ffd5b611d80611c5d565b823581529050602082013567ffffffffffffffff811115611d9f575f5ffd5b611dab84828501611c87565b602083015250604082013567ffffffffffffffff811115611dca575f5ffd5b611dd684828501611c87565b604083015250611de860608301611d30565b6060820152611df960808301611d30565b6080820152611e0a60a08301611d30565b60a082015260c0828101359082015260e08083013590820152611e306101008301611d58565b610100820152611e436101208301611d58565b61012082015292915050565b5f60c08284031215611e5f575f5ffd5b50919050565b5f5f5f5f60608587031215611e78575f5ffd5b843567ffffffffffffffff811115611e8e575f5ffd5b611e9a87828801611d67565b945050602085013567ffffffffffffffff811115611eb6575f5ffd5b8501601f81018713611ec6575f5ffd5b803567ffffffffffffffff811115611edc575f5ffd5b8760208260051b8401011115611ef0575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611f13575f5ffd5b611f1f87828801611e4f565b91505092959194509250565b5f5f60408385031215611f3c575f5ffd5b823567ffffffffffffffff811115611f52575f5ffd5b83016101408186031215611f64575f5ffd5b9150602083013567ffffffffffffffff811115611f7f575f5ffd5b611f8b85828601611e4f565b9150509250929050565b5f60208284031215611fa5575f5ffd5b5035919050565b5f60208284031215611fbc575f5ffd5b611fc582611d30565b9392505050565b81810381811115610f7c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610f7c3683611d67565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612042575f5ffd5b83018035915067ffffffffffffffff82111561205c575f5ffd5b602001915036819003821315612070575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120d6575f5ffd5b9190910192915050565b5f602082840312156120f0575f5ffd5b611fc582611d58565b5f5f85851115612107575f5ffd5b83861115612113575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561217f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526121f9610160840182612186565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122348282612186565b915050606084015161225e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516122cd61012085018215159052565b50610120840151801515610140850152509392505050565b818382375f9101908152919050565b5f60208284031215612304575f5ffd5b505191905056fea2646970667358221220b65576482df9329e5bbd198c777f1f4f6dc5583a10156b7e0bd399053257367f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isQuoteConsumed";
        readonly inputs: readonly [{
            readonly name: "_quoteId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "consumed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaNEARIntents";
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
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaNEARIntents";
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
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly type: "event";
        readonly name: "NEARIntentsBridgeStarted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depositAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
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
        readonly name: "QuoteAlreadyConsumed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): NEARIntentsFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NEARIntentsFacet;
}
export {};
