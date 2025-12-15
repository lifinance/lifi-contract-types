import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CelerCircleBridgeFacet, CelerCircleBridgeFacetInterface } from "../CelerCircleBridgeFacet";
type CelerCircleBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CelerCircleBridgeFacet__factory extends ContractFactory {
    constructor(...args: CelerCircleBridgeFacetConstructorParams);
    deploy(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CelerCircleBridgeFacet>;
    getDeployTransaction(_circleBridgeProxy: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CelerCircleBridgeFacet;
    connect(signer: Signer): CelerCircleBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611fe0380380611fe083398101604081905261002e91610097565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cf565b6001600160a01b0381168114610094575f5ffd5b50565b5f5f604083850312156100a8575f5ffd5b82516100b381610080565b60208401519092506100c481610080565b809150509250929050565b60805160a051611ec161011f5f395f81816096015281816101c601528181610412015281816106d70152818161076401526109fe01525f818160f20152818161017801526109cf0152611ec15ff3fe608060405260043610610058575f3560e01c806389a302711161004157806389a3027114610085578063bf69fa61146100e1578063e0a4201c14610114575f5ffd5b80633d4891ca1461005c5780634f3b075914610072575b5f5ffd5b348015610067575f5ffd5b50610070610133565b005b6100706100803660046119ee565b610233565b348015610090575f5ffd5b506100b87f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100ec575f5ffd5b506100b87f000000000000000000000000000000000000000000000000000000000000000081565b34801561011f575f5ffd5b5061007061012e366004611a9b565b6104ed565b61013b6107ac565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af115801561020c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906102309190611aec565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102ae576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6102be3447611b0e565b9050868061010001516102fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561033b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861035e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610395576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361040f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b897f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461049a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ae8c5f01518d60c001518d8d33610821565b60c08d01526104bd8c8a610963565b50479350505050818111156104e0576104e05f846104db8585611b0e565b610b12565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610568576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561057583611b46565b806101000151156105b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105bb84611b46565b806101200151156105f8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61060185611b46565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610652576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361068f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036106cc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d586611b46565b7f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461075f576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078d7f00000000000000000000000000000000000000000000000000000000000000008960c00135610b47565b61079f61079989611b46565b88610963565b50505f9093555050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff16331461081f576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f8280820361085c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561086a600185611b0e565b81811061087957610879611b51565b905060200281019061088b9190611b7e565b61089c906080810190606001611bba565b90505f6108a882610bfb565b905073ffffffffffffffffffffffffffffffffffffffff82166108d2576108cf3482611b0e565b90505b5f6108dd8888610c45565b90506108e98888610d4f565b6108f68a89898985610dbb565b5f8261090185610bfb565b61090b9190611b0e565b905089811015610955576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60e082015167ffffffffffffffff10156109a9576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c082015160e083015160a084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811693637f975b149390929091167f00000000000000000000000000000000000000000000000000000000000000008635610a2f6040890160208a01611bd3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b168152600481019690965267ffffffffffffffff9094166024860152604485019290925273ffffffffffffffffffffffffffffffffffffffff166064840152608483015263ffffffff1660a482015260c4015f604051808303815f87803b158015610ac1575f5ffd5b505af1158015610ad3573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610b069190611c42565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3c57610b378282610f7d565b505050565b610b37838383610fea565b805f03610b80576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd95780341015610bd5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bd573ffffffffffffffffffffffffffffffffffffffff8316333084611058565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c3d57610c3873ffffffffffffffffffffffffffffffffffffffff8316306110b0565b610c3f565b475b92915050565b6060815f8167ffffffffffffffff811115610c6257610c626117b0565b604051908082528060200260200182016040528015610c8b578160200160208202803683370190505b5090505f5f5b83811015610d4457868682818110610cab57610cab611b51565b9050602002810190610cbd9190611b7e565b610cce906080810190606001611bba565b9150610cd982610bfb565b838281518110610ceb57610ceb611b51565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d3c5734838281518110610d2457610d24611b51565b60200260200101818151610d389190611b0e565b9052505b600101610c91565b509095945050505050565b5f5b81811015610b375736838383818110610d6c57610d6c611b51565b9050602002810190610d7e9190611b7e565b9050610d9060e0820160c08301611d55565b15610db257610db2610da86060830160408401611bba565b8260800135610b47565b50600101610d51565b83838383825f5b81811015610f6357368a8a83818110610ddd57610ddd611b51565b9050602002810190610def9190611b7e565b9050610e1e610e046060830160408401611bba565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e805750610e80610e376040830160208401611bba565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e975750610e97610e376020830183611bba565b8015610f1a5750610f1a610eae60a0830183611d70565b610ebc916004915f91611dd8565b610ec591611dff565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f50576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f5a8c826110e3565b50600101610dc2565b5050610f72848484845f611356565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fca576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bd573ffffffffffffffffffffffffffffffffffffffff83168261156d565b73ffffffffffffffffffffffffffffffffffffffff8216611037576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3773ffffffffffffffffffffffffffffffffffffffff84168383611586565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166110a357637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6110fb6110f36020830183611bba565b6017903b1190565b611131576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611170576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611184610e046060850160408601611bba565b61118e575f611194565b82608001355b90505f6111af6111aa6080860160608701611bba565b610bfb565b9050815f036111e5576111e56111cb6060860160408701611bba565b6111db6040870160208801611bba565b86608001356115cf565b5f806111f46020870187611bba565b73ffffffffffffffffffffffffffffffffffffffff168461121860a0890189611d70565b604051611226929190611e65565b5f6040518083038185875af1925050503d805f8114611260576040519150601f19603f3d011682016040523d82523d5f602084013e611265565b606091505b50915091508161127857611278816115fb565b5f61128c6111aa6080890160608a01611bba565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886112bd60208a018a611bba565b6112cd60608b0160408c01611bba565b6112dd60808c0160608d01611bba565b8b608001358987116112ef57866112f9565b6112f98a88611b0e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611365600182611b0e565b81811061137457611374611b51565b90506020028101906113869190611b7e565b611397906080810190606001611bba565b90505f5f5f5f5f5f5f5b8881101561155d576113b460018a611b0e565b811080156113c3575088600114155b1561149e578d8d828181106113da576113da611b51565b90506020028101906113ec9190611b7e565b6113fd906080810190606001611bba565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461149e578a818151811061144457611444611b51565b602002602001015161145587610bfb565b61145f9190611b0e565b965073ffffffffffffffffffffffffffffffffffffffff861615611483575f611485565b895b93508387111561149e5761149e868d6104db878b611b0e565b8d8d828181106114b0576114b0611b51565b90506020028101906114c29190611b7e565b6114d3906060810190604001611bba565b94506114de85610bfb565b925073ffffffffffffffffffffffffffffffffffffffff851615611502575f611504565b895b9150818311801561154157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561155557611555858d6104db8587611b0e565b6001016113a1565b5050505050505050505050505050565b5f385f3884865af1610bd55763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166115c6576390b8ec185f526004601cfd5b5f603452505050565b610b378383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611605565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561172c5773ffffffffffffffffffffffffffffffffffffffff831661166e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156116e1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117059190611e74565b101561172c5761172c73ffffffffffffffffffffffffffffffffffffffff85168483611732565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166115c6575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166115c657633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611801576118016117b0565b60405290565b5f82601f830112611816575f5ffd5b813567ffffffffffffffff811115611830576118306117b0565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561187d5761187d6117b0565b604052818152838201602001851015611894575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146118d3575f5ffd5b919050565b8015158114610230575f5ffd5b80356118d3816118d8565b5f6101408284031215611901575f5ffd5b6119096117dd565b823581529050602082013567ffffffffffffffff811115611928575f5ffd5b61193484828501611807565b602083015250604082013567ffffffffffffffff811115611953575f5ffd5b61195f84828501611807565b604083015250611971606083016118b0565b6060820152611982608083016118b0565b608082015261199360a083016118b0565b60a082015260c0828101359082015260e080830135908201526119b961010083016118e5565b6101008201526119cc61012083016118e5565b61012082015292915050565b5f604082840312156119e8575f5ffd5b50919050565b5f5f5f5f60808587031215611a01575f5ffd5b843567ffffffffffffffff811115611a17575f5ffd5b611a23878288016118f0565b945050602085013567ffffffffffffffff811115611a3f575f5ffd5b8501601f81018713611a4f575f5ffd5b803567ffffffffffffffff811115611a65575f5ffd5b8760208260051b8401011115611a79575f5ffd5b60209190910193509150611a9086604087016119d8565b905092959194509250565b5f5f60608385031215611aac575f5ffd5b823567ffffffffffffffff811115611ac2575f5ffd5b83016101408186031215611ad4575f5ffd5b9150611ae384602085016119d8565b90509250929050565b5f60208284031215611afc575f5ffd5b8151611b07816118d8565b9392505050565b81810381811115610c3f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c3f36836118f0565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611bb0575f5ffd5b9190910192915050565b5f60208284031215611bca575f5ffd5b611b07826118b0565b5f60208284031215611be3575f5ffd5b813563ffffffff81168114611b07575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611c69610160840182611bf6565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611ca48282611bf6565b9150506060840151611cce608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d3d61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611d65575f5ffd5b8135611b07816118d8565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611da3575f5ffd5b83018035915067ffffffffffffffff821115611dbd575f5ffd5b602001915036819003821315611dd1575f5ffd5b9250929050565b5f5f85851115611de6575f5ffd5b83861115611df2575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611e5e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611e84575f5ffd5b505191905056fea26469706673582212205e464b407df66b75139433d841eb4996ad7f7048c5a17ef78d82a3473c19361064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_circleBridgeProxy";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "CIRCLE_BRIDGE_PROXY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ICircleBridgeProxy";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "USDC";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initCelerCircleBridge";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCelerCircleBridge";
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
            readonly name: "_celerCircleData";
            readonly type: "tuple";
            readonly internalType: "struct CelerCircleBridgeFacet.CelerCircleData";
            readonly components: readonly [{
                readonly name: "maxFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaCelerCircleBridge";
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
            readonly name: "_celerCircleData";
            readonly type: "tuple";
            readonly internalType: "struct CelerCircleBridgeFacet.CelerCircleData";
            readonly components: readonly [{
                readonly name: "maxFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly name: "InvalidSendingToken";
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): CelerCircleBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CelerCircleBridgeFacet;
}
export {};
