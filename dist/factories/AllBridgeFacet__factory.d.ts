import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611fb3380380611fb383398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611efa6100b95f395f818161072c0152818161076c01526108460152611efa5ff3fe608060405260043610610028575f3560e01c8063632674691461002c5780636a51e9a914610041575b5f5ffd5b61003f61003a3660046119d6565b610054565b005b61003f61004f366004611a84565b610281565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611ad0565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102448a5f01518b60c001518b8b336104a1565b60c08b01526102538a886105e3565b504791505081811115610274576102745f8461026f8585611ad0565b610958565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030c3447611ad0565b9050846103318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610368576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047088608001518960c0015161098d565b61047a88886105e3565b504791505081811115610496576104965f8461026f8585611ad0565b50505f909155505050565b5f828082036104dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ea600185611ad0565b8181106104f9576104f9611b08565b905060200281019061050b9190611b35565b61051c906080810190606001611b71565b90505f61052882610a41565b905073ffffffffffffffffffffffffffffffffffffffff82166105525761054f3482611ad0565b90505b5f61055d8888610a8b565b90506105698888610b95565b6105768a89898985610c01565b5f8261058185610a41565b61058b9190611ad0565b9050898110156105d5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f6105f18360e00151610e4c565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036106b4578135610676576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8251604051833581528291907f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610722565b815f01355f1c73ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610722576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075583608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610f73565b61076560c0830160a08401611b91565b15610844577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c00151855f013585876040013588606001358960800160208101906107ea9190611baa565b8a602001356040518963ffffffff1660e01b8152600401610812989796959493929190611c01565b5f604051808303815f87803b158015610829575f5ffd5b505af115801561083b573d5f5f3e3d5ffd5b5050505061091c565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd8360200135856080015173ffffffffffffffffffffffffffffffffffffffff165f1b8660c00151865f013586886040013589606001358a60800160208101906108c99190611baa565b5f6040518a63ffffffff1660e01b81526004016108ed989796959493929190611c01565b5f604051808303818588803b158015610904575f5ffd5b505af1158015610916573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161094b9190611c96565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166109825761097d8282610f9f565b505050565b61097d83838361100c565b805f036109c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a1f5780341015610a1b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a1b73ffffffffffffffffffffffffffffffffffffffff831633308461107a565b5f73ffffffffffffffffffffffffffffffffffffffff821615610a8357610a7e73ffffffffffffffffffffffffffffffffffffffff8316306110d2565b610a85565b475b92915050565b6060815f8167ffffffffffffffff811115610aa857610aa86117a6565b604051908082528060200260200182016040528015610ad1578160200160208202803683370190505b5090505f5f5b83811015610b8a57868682818110610af157610af1611b08565b9050602002810190610b039190611b35565b610b14906080810190606001611b71565b9150610b1f82610a41565b838281518110610b3157610b31611b08565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b825734838281518110610b6a57610b6a611b08565b60200260200101818151610b7e9190611ad0565b9052505b600101610ad7565b509095945050505050565b5f5b8181101561097d5736838383818110610bb257610bb2611b08565b9050602002810190610bc49190611b35565b9050610bd660e0820160c08301611b91565b15610bf857610bf8610bee6060830160408401611b71565b826080013561098d565b50600101610b97565b83838383825f5b81811015610e3257368a8a83818110610c2357610c23611b08565b9050602002810190610c359190611b35565b90505f610c456020830183611b71565b90505f610c586040840160208501611b71565b9050610cfb82610c6b60a0860186611da9565b610c79916004915f91611e11565b610c8291611e38565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610de35750610d2f610d156060850160408601611b71565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610d6857508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015610de3575073ffffffffffffffffffffffffffffffffffffffff81165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610e1a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e248e84611105565b836001019350505050610c08565b5050610e41848484845f611378565b505050505050505050565b5f6001821480610e5c5750600a82145b15610e65575090565b60388203610e7557506002919050565b6606b2787ad08cbc8203610e8b57506003919050565b660416edef1601be8203610ea157506004919050565b60898203610eb157506005919050565b61a4b18203610ec257506006919050565b61a86a8203610ed357506008919050565b6121058203610ee457506009919050565b61a4ec8203610ef55750600b919050565b6620ef04111160008203610f0b5750600d919050565b60928203610f1b5750600c919050565b60828203610f2b5750600e919050565b61e7088203610f3c57506011919050565b6040517f22df402100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b61097d8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61158f565b73ffffffffffffffffffffffffffffffffffffffff8216610fec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a1b73ffffffffffffffffffffffffffffffffffffffff8316826116bc565b73ffffffffffffffffffffffffffffffffffffffff8216611059576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61097d73ffffffffffffffffffffffffffffffffffffffff841683836116d5565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166110c557637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61111d6111156020830183611b71565b6017903b1190565b611153576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611192576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6111a6610d156060850160408601611b71565b6111b0575f6111b6565b82608001355b90505f6111d16111cc6080860160608701611b71565b610a41565b9050815f03611207576112076111ed6060860160408701611b71565b6111fd6040870160208801611b71565b8660800135610f73565b5f806112166020870187611b71565b73ffffffffffffffffffffffffffffffffffffffff168461123a60a0890189611da9565b604051611248929190611e9e565b5f6040518083038185875af1925050503d805f8114611282576040519150601f19603f3d011682016040523d82523d5f602084013e611287565b606091505b50915091508161129a5761129a8161171e565b5f6112ae6111cc6080890160608a01611b71565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886112df60208a018a611b71565b6112ef60608b0160408c01611b71565b6112ff60808c0160608d01611b71565b8b60800135898711611311578661131b565b61131b8a88611ad0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611387600182611ad0565b81811061139657611396611b08565b90506020028101906113a89190611b35565b6113b9906080810190606001611b71565b90505f5f5f5f5f5f5f5b8881101561157f576113d660018a611ad0565b811080156113e5575088600114155b156114c0578d8d828181106113fc576113fc611b08565b905060200281019061140e9190611b35565b61141f906080810190606001611b71565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146114c0578a818151811061146657611466611b08565b602002602001015161147787610a41565b6114819190611ad0565b965073ffffffffffffffffffffffffffffffffffffffff8616156114a5575f6114a7565b895b9350838711156114c0576114c0868d61026f878b611ad0565b8d8d828181106114d2576114d2611b08565b90506020028101906114e49190611b35565b6114f5906060810190604001611b71565b945061150085610a41565b925073ffffffffffffffffffffffffffffffffffffffff851615611524575f611526565b895b9150818311801561156357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561157757611577858d61026f8587611ad0565b6001016113c3565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156116b65773ffffffffffffffffffffffffffffffffffffffff83166115f8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561166b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061168f9190611ead565b10156116b6576116b673ffffffffffffffffffffffffffffffffffffffff85168483611728565b50505050565b5f385f3884865af1610a1b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611715576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611715575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661171557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117f7576117f76117a6565b60405290565b5f82601f83011261180c575f5ffd5b813567ffffffffffffffff811115611826576118266117a6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611873576118736117a6565b60405281815283820160200185101561188a575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f6e575f5ffd5b80358015158114610f6e575f5ffd5b5f61014082840312156118e9575f5ffd5b6118f16117d3565b823581529050602082013567ffffffffffffffff811115611910575f5ffd5b61191c848285016117fd565b602083015250604082013567ffffffffffffffff81111561193b575f5ffd5b611947848285016117fd565b604083015250611959606083016118a6565b606082015261196a608083016118a6565b608082015261197b60a083016118a6565b60a082015260c0828101359082015260e080830135908201526119a161010083016118c9565b6101008201526119b461012083016118c9565b61012082015292915050565b5f60c082840312156119d0575f5ffd5b50919050565b5f5f5f5f61010085870312156119ea575f5ffd5b843567ffffffffffffffff811115611a00575f5ffd5b611a0c878288016118d8565b945050602085013567ffffffffffffffff811115611a28575f5ffd5b8501601f81018713611a38575f5ffd5b803567ffffffffffffffff811115611a4e575f5ffd5b8760208260051b8401011115611a62575f5ffd5b60209190910193509150611a7986604087016119c0565b905092959194509250565b5f5f60e08385031215611a95575f5ffd5b823567ffffffffffffffff811115611aab575f5ffd5b611ab7858286016118d8565b925050611ac784602085016119c0565b90509250929050565b81810381811115610a85577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b67575f5ffd5b9190910192915050565b5f60208284031215611b81575f5ffd5b611b8a826118a6565b9392505050565b5f60208284031215611ba1575f5ffd5b611b8a826118c9565b5f60208284031215611bba575f5ffd5b813560048110611b8a575f5ffd5b60048110611bfd577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a0830152611c3760c0830185611bc8565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611cbd610160840182611c4a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611cf88282611c4a565b9150506060840151611d22608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d9161012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ddc575f5ffd5b83018035915067ffffffffffffffff821115611df6575f5ffd5b602001915036819003821315611e0a575f5ffd5b9250929050565b5f5f85851115611e1f575f5ffd5b83861115611e2b575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611e97577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611ebd575f5ffd5b505191905056fea26469706673582212209802c5decbdfee0f02535bd1fdf89dec0cf3d630b226db73b3be86a3ed1673aa64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
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
        readonly name: "InvalidNonEVMReceiver";
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedAllBridgeChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
