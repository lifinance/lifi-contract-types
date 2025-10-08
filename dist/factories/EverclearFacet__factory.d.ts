import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearFacet, EverclearFacetInterface } from "../EverclearFacet";
type EverclearFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearFacet__factory extends ContractFactory {
    constructor(...args: EverclearFacetConstructorParams);
    deploy(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearFacet>;
    getDeployTransaction(_feeAdapter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearFacet;
    connect(signer: Signer): EverclearFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161237138038061237183398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516122b26100bf5f395f8181605d0152818161062d0152818161079301526108e701526122b25ff3fe608060405260043610610033575f3560e01c8063168f2a1e14610037578063661d9c201461004c578063f71122d8146100a8575b5f5ffd5b61004a610045366004611a13565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611a78565b6102e0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611b3e565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102aa88608001518960c00151610508565b6102b488886105bc565b5047915050818111156102d5576102d55f846102d08585611b3e565b610a50565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161035b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61036b3447611b3e565b9050868061010001516103aa576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103e8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861040b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610442576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104bc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104d08a5f01518b60c001518b8b33610a85565b60c08b01526104df8a886105bc565b5047915050818111156104fb576104fb5f846102d08585611b3e565b50505f9091555050505050565b805f03610541576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661059a5780341015610596576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61059673ffffffffffffffffffffffffffffffffffffffff8316333084610bc7565b803515806105cc57506020810135155b15610603576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16156106565761065682608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610c1f565b6040805160608101825260a0830135815260c083013560208201525f91810161068260e0850185611b76565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505060408051600180825281830190925293945090929150602080830190803683370190505090508360e00151815f815181106106f4576106f4611bde565b602002602001019063ffffffff16908163ffffffff16815250507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff16036108e5578235610791576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c75482855f0135876080015187602001358860a001358a60c001516107f09190611b3e565b61080060608b0160408c01611c1e565b61081060808c0160608d01611c53565b61081d60808d018d611b76565b8c6040518b63ffffffff1660e01b81526004016108439a99989796959493929190611d31565b5f604051808303815f875af115801561085e573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108a39190810190611f15565b505060e08401518451604051853581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a3610a13565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c754828660a0015173ffffffffffffffffffffffffffffffffffffffff165f1b876080015187602001358860a001358a60c0015161095d9190611b3e565b61096d60608b0160408c01611c1e565b61097d60808c0160608d01611c53565b61098a60808d018d611b76565b8c6040518b63ffffffff1660e01b81526004016109b09a99989796959493929190611d31565b5f604051808303815f875af11580156109cb573d5f5f3e3d5ffd5b505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a109190810190611f15565b50505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610a429190612048565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a7a57610a758282610c4b565b505050565b610a75838383610cb8565b5f82808203610ac0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610ace600185611b3e565b818110610add57610add611bde565b9050602002810190610aef919061215b565b610b00906080810190606001612197565b90505f610b0c82610d26565b905073ffffffffffffffffffffffffffffffffffffffff8216610b3657610b333482611b3e565b90505b5f610b418888610d70565b9050610b4d8888610e7a565b610b5a8a89898985610ee6565b5f82610b6585610d26565b610b6f9190611b3e565b905089811015610bb9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610c1257637939f4245f526004601cfd5b5f60605260405250505050565b610a758383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110a8565b73ffffffffffffffffffffffffffffffffffffffff8216610c98576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61059673ffffffffffffffffffffffffffffffffffffffff8316826111d5565b73ffffffffffffffffffffffffffffffffffffffff8216610d05576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a7573ffffffffffffffffffffffffffffffffffffffff841683836111ee565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d6857610d6373ffffffffffffffffffffffffffffffffffffffff831630611237565b610d6a565b475b92915050565b6060815f8167ffffffffffffffff811115610d8d57610d8d61177c565b604051908082528060200260200182016040528015610db6578160200160208202803683370190505b5090505f5f5b83811015610e6f57868682818110610dd657610dd6611bde565b9050602002810190610de8919061215b565b610df9906080810190606001612197565b9150610e0482610d26565b838281518110610e1657610e16611bde565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e675734838281518110610e4f57610e4f611bde565b60200260200101818151610e639190611b3e565b9052505b600101610dbc565b509095945050505050565b5f5b81811015610a755736838383818110610e9757610e97611bde565b9050602002810190610ea9919061215b565b9050610ebb60e0820160c083016121b0565b15610edd57610edd610ed36060830160408401612197565b8260800135610508565b50600101610e7c565b83838383825f5b8181101561108e57368a8a83818110610f0857610f08611bde565b9050602002810190610f1a919061215b565b9050610f49610f2f6060830160408401612197565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fab5750610fab610f626040830160208401612197565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fc25750610fc2610f626020830183612197565b80156110455750611045610fd960a0830183611b76565b610fe7916004915f916121c9565b610ff0916121f0565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61107b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110858c8261126a565b50600101610eed565b505061109d848484845f6114dd565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111cf5773ffffffffffffffffffffffffffffffffffffffff8316611111576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611184573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111a89190612256565b10156111cf576111cf73ffffffffffffffffffffffffffffffffffffffff851684836116f4565b50505050565b5f385f3884865af16105965763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661122e576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61128261127a6020830183612197565b6017903b1190565b6112b8576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112f7576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61130b610f2f6060850160408601612197565b611315575f61131b565b82608001355b90505f6113366113316080860160608701612197565b610d26565b9050815f0361136c5761136c6113526060860160408701612197565b6113626040870160208801612197565b8660800135610c1f565b5f8061137b6020870187612197565b73ffffffffffffffffffffffffffffffffffffffff168461139f60a0890189611b76565b6040516113ad92919061226d565b5f6040518083038185875af1925050503d805f81146113e7576040519150601f19603f3d011682016040523d82523d5f602084013e6113ec565b606091505b5091509150816113ff576113ff81611772565b5f6114136113316080890160608a01612197565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861144460208a018a612197565b61145460608b0160408c01612197565b61146460808c0160608d01612197565b8b608001358987116114765786611480565b6114808a88611b3e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114ec600182611b3e565b8181106114fb576114fb611bde565b905060200281019061150d919061215b565b61151e906080810190606001612197565b90505f5f5f5f5f5f5f5b888110156116e45761153b60018a611b3e565b8110801561154a575088600114155b15611625578d8d8281811061156157611561611bde565b9050602002810190611573919061215b565b611584906080810190606001612197565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611625578a81815181106115cb576115cb611bde565b60200260200101516115dc87610d26565b6115e69190611b3e565b965073ffffffffffffffffffffffffffffffffffffffff86161561160a575f61160c565b895b93508387111561162557611625868d6102d0878b611b3e565b8d8d8281811061163757611637611bde565b9050602002810190611649919061215b565b61165a906060810190604001612197565b945061166585610d26565b925073ffffffffffffffffffffffffffffffffffffffff851615611689575f61168b565b895b915081831180156116c857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116dc576116dc858d6102d08587611b3e565b600101611528565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661122e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661122e57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117cd576117cd61177c565b60405290565b604051610180810167ffffffffffffffff811182821017156117cd576117cd61177c565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561183e5761183e61177c565b604052919050565b5f67ffffffffffffffff82111561185f5761185f61177c565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f83011261189a575f5ffd5b81356118ad6118a882611846565b6117f7565b8181528460208386010111156118c1575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611900575f5ffd5b919050565b80358015158114611900575f5ffd5b5f6101408284031215611925575f5ffd5b61192d6117a9565b823581529050602082013567ffffffffffffffff81111561194c575f5ffd5b6119588482850161188b565b602083015250604082013567ffffffffffffffff811115611977575f5ffd5b6119838482850161188b565b604083015250611995606083016118dd565b60608201526119a6608083016118dd565b60808201526119b760a083016118dd565b60a082015260c0828101359082015260e080830135908201526119dd6101008301611905565b6101008201526119f06101208301611905565b61012082015292915050565b5f6101008284031215611a0d575f5ffd5b50919050565b5f5f60408385031215611a24575f5ffd5b823567ffffffffffffffff811115611a3a575f5ffd5b611a4685828601611914565b925050602083013567ffffffffffffffff811115611a62575f5ffd5b611a6e858286016119fc565b9150509250929050565b5f5f5f5f60608587031215611a8b575f5ffd5b843567ffffffffffffffff811115611aa1575f5ffd5b611aad87828801611914565b945050602085013567ffffffffffffffff811115611ac9575f5ffd5b8501601f81018713611ad9575f5ffd5b803567ffffffffffffffff811115611aef575f5ffd5b8760208260051b8401011115611b03575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611b26575f5ffd5b611b32878288016119fc565b91505092959194509250565b81810381811115610d6a577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ba9575f5ffd5b83018035915067ffffffffffffffff821115611bc3575f5ffd5b602001915036819003821315611bd7575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b62ffffff81168114611c1b575f5ffd5b50565b5f60208284031215611c2e575f5ffd5b8135611c3981611c0b565b9392505050565b65ffffffffffff81168114611c1b575f5ffd5b5f60208284031215611c63575f5ffd5b8135611c3981611c40565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611d296060850182611cb5565b949350505050565b6101208082528b519082018190525f9060208d0190610140840190835b81811015611d7257835163ffffffff16835260209384019390920191600101611d4e565b50508c6020850152611d9c604085018d73ffffffffffffffffffffffffffffffffffffffff169052565b8a6060850152896080850152611db960a085018a62ffffff169052565b65ffffffffffff881660c085015283810360e0850152611dda818789611c6e565b915050828103610100840152611df08185611d01565b9d9c50505050505050505050505050565b805161190081611c0b565b805163ffffffff81168114611900575f5ffd5b805167ffffffffffffffff81168114611900575f5ffd5b805161190081611c40565b5f82601f830112611e50575f5ffd5b815167ffffffffffffffff811115611e6a57611e6a61177c565b8060051b611e7a602082016117f7565b91825260208185018101929081019086841115611e95575f5ffd5b6020860192505b83831015611ebe57611ead83611e0c565b825260209283019290910190611e9c565b9695505050505050565b5f82601f830112611ed7575f5ffd5b8151611ee56118a882611846565b818152846020838601011115611ef9575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f60408385031215611f26575f5ffd5b8251602084015190925067ffffffffffffffff811115611f44575f5ffd5b83016101808186031215611f56575f5ffd5b611f5e6117d3565b81518152602080830151908201526040808301519082015260608083015190820152611f8c60808301611e01565b6080820152611f9d60a08301611e0c565b60a0820152611fae60c08301611e1f565b60c0820152611fbf60e08301611e36565b60e0820152611fd16101008301611e36565b610100820152610120828101519082015261014082015167ffffffffffffffff811115611ffc575f5ffd5b61200887828501611e41565b6101408301525061016082015167ffffffffffffffff811115612029575f5ffd5b61203587828501611ec8565b6101608301525080925050509250929050565b60208152815160208201525f6020830151610140604084015261206f610160840182611cb5565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120aa8282611cb5565b91505060608401516120d4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161214361012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261218d575f5ffd5b9190910192915050565b5f602082840312156121a7575f5ffd5b611c39826118dd565b5f602082840312156121c0575f5ffd5b611c3982611905565b5f5f858511156121d7575f5ffd5b838611156121e3575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561224f577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612266575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122017a35c46e5b3a6e812757a0841da167f21390242d5e21ad4cd22d31e892f483d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapter";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearFacet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "maxFee";
                readonly type: "uint24";
                readonly internalType: "uint24";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
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
    }];
    static createInterface(): EverclearFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearFacet;
}
export {};
