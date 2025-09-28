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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161236338038061236383398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516122a46100bf5f395f8181605d0152818161064f0152818161077d01526108c701526122a45ff3fe608060405260043610610033575f3560e01c8063168f2a1e14610037578063661d9c201461004c578063f71122d8146100a8575b5f5ffd5b61004a6100453660046119ea565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611a4f565b6102ef565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611b42565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b988608001518860a001358a60c001516102b49190611b55565b610517565b6102c388886105cb565b5047915050818111156102e4576102e45f846102df8585611b42565b610a27565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161036a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61037a3447611b42565b9050868061010001516103b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861041a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610451576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361048e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104cb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104df8a5f01518b60c001518b8b33610a5c565b60c08b01526104ee8a886105cb565b50479150508181111561050a5761050a5f846102df8585611b42565b50505f9091555050505050565b805f03610550576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a957803410156105a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105a573ffffffffffffffffffffffffffffffffffffffff8316333084610b9e565b803515806105db57506020810135155b15610612576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610635836080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610645575060c0820151610678565b61067883608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610bf6565b6040805160608101825260a0840135815260c084013560208201525f9181016106a460e0860186611b68565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92018290525093909452505060408051600180825281830190925293945090929150602080830190803683370190505090508460e00151815f8151811061071657610716611bd0565b602002602001019063ffffffff16908163ffffffff16815250507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff16036108c5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c7548483875f0135896080015189602001358b60c001518b60400160208101906107df9190611c10565b6107ef60808e0160608f01611c45565b6107fc60808f018f611b68565b8d6040518c63ffffffff1660e01b81526004016108229a99989796959493929190611d23565b5f6040518083038185885af115801561083d573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526108839190810190611f07565b505060e08501518551604051863581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36109e9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633bd1c75484838860a0015173ffffffffffffffffffffffffffffffffffffffff165f1b896080015189602001358b60c001518b60400160208101906109429190611c10565b61095260808e0160608f01611c45565b61095f60808f018f611b68565b8d6040518c63ffffffff1660e01b81526004016109859a99989796959493929190611d23565b5f6040518083038185885af11580156109a0573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109e69190810190611f07565b50505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610a18919061203a565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a5157610a4c8282610c22565b505050565b610a4c838383610c8f565b5f82808203610a97576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610aa5600185611b42565b818110610ab457610ab4611bd0565b9050602002810190610ac6919061214d565b610ad7906080810190606001612189565b90505f610ae382610cfd565b905073ffffffffffffffffffffffffffffffffffffffff8216610b0d57610b0a3482611b42565b90505b5f610b188888610d47565b9050610b248888610e51565b610b318a89898985610ebd565b5f82610b3c85610cfd565b610b469190611b42565b905089811015610b90576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610be957637939f4245f526004601cfd5b5f60605260405250505050565b610a4c8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61107f565b73ffffffffffffffffffffffffffffffffffffffff8216610c6f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a573ffffffffffffffffffffffffffffffffffffffff8316826111ac565b73ffffffffffffffffffffffffffffffffffffffff8216610cdc576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a4c73ffffffffffffffffffffffffffffffffffffffff841683836111c5565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d3f57610d3a73ffffffffffffffffffffffffffffffffffffffff83163061120e565b610d41565b475b92915050565b6060815f8167ffffffffffffffff811115610d6457610d64611753565b604051908082528060200260200182016040528015610d8d578160200160208202803683370190505b5090505f5f5b83811015610e4657868682818110610dad57610dad611bd0565b9050602002810190610dbf919061214d565b610dd0906080810190606001612189565b9150610ddb82610cfd565b838281518110610ded57610ded611bd0565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e3e5734838281518110610e2657610e26611bd0565b60200260200101818151610e3a9190611b42565b9052505b600101610d93565b509095945050505050565b5f5b81811015610a4c5736838383818110610e6e57610e6e611bd0565b9050602002810190610e80919061214d565b9050610e9260e0820160c083016121a2565b15610eb457610eb4610eaa6060830160408401612189565b8260800135610517565b50600101610e53565b83838383825f5b8181101561106557368a8a83818110610edf57610edf611bd0565b9050602002810190610ef1919061214d565b9050610f20610f066060830160408401612189565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f825750610f82610f396040830160208401612189565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f995750610f99610f396020830183612189565b801561101c575061101c610fb060a0830183611b68565b610fbe916004915f916121bb565b610fc7916121e2565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611052576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61105c8c82611241565b50600101610ec4565b5050611074848484845f6114b4565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111a65773ffffffffffffffffffffffffffffffffffffffff83166110e8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561115b573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061117f9190612248565b10156111a6576111a673ffffffffffffffffffffffffffffffffffffffff851684836116cb565b50505050565b5f385f3884865af16105a55763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611205576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112596112516020830183612189565b6017903b1190565b61128f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036112ce576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6112e2610f066060850160408601612189565b6112ec575f6112f2565b82608001355b90505f61130d6113086080860160608701612189565b610cfd565b9050815f03611343576113436113296060860160408701612189565b6113396040870160208801612189565b8660800135610bf6565b5f806113526020870187612189565b73ffffffffffffffffffffffffffffffffffffffff168461137660a0890189611b68565b60405161138492919061225f565b5f6040518083038185875af1925050503d805f81146113be576040519150601f19603f3d011682016040523d82523d5f602084013e6113c3565b606091505b5091509150816113d6576113d681611749565b5f6113ea6113086080890160608a01612189565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861141b60208a018a612189565b61142b60608b0160408c01612189565b61143b60808c0160608d01612189565b8b6080013589871161144d5786611457565b6114578a88611b42565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826114c3600182611b42565b8181106114d2576114d2611bd0565b90506020028101906114e4919061214d565b6114f5906080810190606001612189565b90505f5f5f5f5f5f5f5b888110156116bb5761151260018a611b42565b81108015611521575088600114155b156115fc578d8d8281811061153857611538611bd0565b905060200281019061154a919061214d565b61155b906080810190606001612189565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146115fc578a81815181106115a2576115a2611bd0565b60200260200101516115b387610cfd565b6115bd9190611b42565b965073ffffffffffffffffffffffffffffffffffffffff8616156115e1575f6115e3565b895b9350838711156115fc576115fc868d6102df878b611b42565b8d8d8281811061160e5761160e611bd0565b9050602002810190611620919061214d565b611631906060810190604001612189565b945061163c85610cfd565b925073ffffffffffffffffffffffffffffffffffffffff851615611660575f611662565b895b9150818311801561169f57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156116b3576116b3858d6102df8587611b42565b6001016114ff565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611205575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661120557633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156117a4576117a4611753565b60405290565b604051610180810167ffffffffffffffff811182821017156117a4576117a4611753565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561181557611815611753565b604052919050565b5f67ffffffffffffffff82111561183657611836611753565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611871575f5ffd5b813561188461187f8261181d565b6117ce565b818152846020838601011115611898575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146118d7575f5ffd5b919050565b803580151581146118d7575f5ffd5b5f61014082840312156118fc575f5ffd5b611904611780565b823581529050602082013567ffffffffffffffff811115611923575f5ffd5b61192f84828501611862565b602083015250604082013567ffffffffffffffff81111561194e575f5ffd5b61195a84828501611862565b60408301525061196c606083016118b4565b606082015261197d608083016118b4565b608082015261198e60a083016118b4565b60a082015260c0828101359082015260e080830135908201526119b461010083016118dc565b6101008201526119c761012083016118dc565b61012082015292915050565b5f61010082840312156119e4575f5ffd5b50919050565b5f5f604083850312156119fb575f5ffd5b823567ffffffffffffffff811115611a11575f5ffd5b611a1d858286016118eb565b925050602083013567ffffffffffffffff811115611a39575f5ffd5b611a45858286016119d3565b9150509250929050565b5f5f5f5f60608587031215611a62575f5ffd5b843567ffffffffffffffff811115611a78575f5ffd5b611a84878288016118eb565b945050602085013567ffffffffffffffff811115611aa0575f5ffd5b8501601f81018713611ab0575f5ffd5b803567ffffffffffffffff811115611ac6575f5ffd5b8760208260051b8401011115611ada575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611afd575f5ffd5b611b09878288016119d3565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d4157610d41611b15565b80820180821115610d4157610d41611b15565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b9b575f5ffd5b83018035915067ffffffffffffffff821115611bb5575f5ffd5b602001915036819003821315611bc9575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b62ffffff81168114611c0d575f5ffd5b50565b5f60208284031215611c20575f5ffd5b8135611c2b81611bfd565b9392505050565b65ffffffffffff81168114611c0d575f5ffd5b5f60208284031215611c55575f5ffd5b8135611c2b81611c32565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611d1b6060850182611ca7565b949350505050565b6101208082528b519082018190525f9060208d0190610140840190835b81811015611d6457835163ffffffff16835260209384019390920191600101611d40565b50508c6020850152611d8e604085018d73ffffffffffffffffffffffffffffffffffffffff169052565b8a6060850152896080850152611dab60a085018a62ffffff169052565b65ffffffffffff881660c085015283810360e0850152611dcc818789611c60565b915050828103610100840152611de28185611cf3565b9d9c50505050505050505050505050565b80516118d781611bfd565b805163ffffffff811681146118d7575f5ffd5b805167ffffffffffffffff811681146118d7575f5ffd5b80516118d781611c32565b5f82601f830112611e42575f5ffd5b815167ffffffffffffffff811115611e5c57611e5c611753565b8060051b611e6c602082016117ce565b91825260208185018101929081019086841115611e87575f5ffd5b6020860192505b83831015611eb057611e9f83611dfe565b825260209283019290910190611e8e565b9695505050505050565b5f82601f830112611ec9575f5ffd5b8151611ed761187f8261181d565b818152846020838601011115611eeb575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f60408385031215611f18575f5ffd5b8251602084015190925067ffffffffffffffff811115611f36575f5ffd5b83016101808186031215611f48575f5ffd5b611f506117aa565b81518152602080830151908201526040808301519082015260608083015190820152611f7e60808301611df3565b6080820152611f8f60a08301611dfe565b60a0820152611fa060c08301611e11565b60c0820152611fb160e08301611e28565b60e0820152611fc36101008301611e28565b610100820152610120828101519082015261014082015167ffffffffffffffff811115611fee575f5ffd5b611ffa87828501611e33565b6101408301525061016082015167ffffffffffffffff81111561201b575f5ffd5b61202787828501611eba565b6101608301525080925050509250929050565b60208152815160208201525f60208301516101406040840152612061610160840182611ca7565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261209c8282611ca7565b91505060608401516120c6608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161213561012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261217f575f5ffd5b9190910192915050565b5f60208284031215612199575f5ffd5b611c2b826118b4565b5f602082840312156121b2575f5ffd5b611c2b826118dc565b5f5f858511156121c9575f5ffd5b838611156121d5575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612241577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612258575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220f9b80bc4968f56fd0acf31b6040c95a7b180a350aff577bc1e600ae03c049ead64736f6c634300081d0033";
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
