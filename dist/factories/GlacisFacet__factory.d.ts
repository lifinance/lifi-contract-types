import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611ffe380380611ffe83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611f466100b85f395f8181607001528181610810015261085f0152611f465ff3fe608060405260043610610033575f3560e01c80636f9206ba146100375780639c4b6dd91461004c578063bbbf77d51461005f575b5f5ffd5b61004a610045366004611a4e565b6100bb565b005b61004a61005a366004611a9a565b61033b565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611b47565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e8989610677565b50479250505081811115610330576103305f8461032b8585611b47565b6109ad565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611b47565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d604001356109e2565b60c08c01526105998b89610677565b504792505050818111156105b6576105b65f8461032b8585611b47565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065173ffffffffffffffffffffffffffffffffffffffff8316333084610b7c565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff160361073a5780356106fa576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e08201518251604051833581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36107a8565b805f01355f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16146107a8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107b96040830160208401611b7f565b73ffffffffffffffffffffffffffffffffffffffff1603610806576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083982608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bd4565b608082015160c083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631f9cd527926040860180359387359161089d9060208a01611b7f565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff95861660048201526024810194909452604484019290925260648301529091166084820152606085013560a482015260c4015f6040518083038185885af115801561092b573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109719190810190611b9f565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109a19190611c60565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109d7576109d28282610c00565b505050565b6109d2838383610c6d565b5f83808203610a1d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a2b600185611b47565b818110610a3a57610a3a611d73565b9050602002810190610a4c9190611da0565b610a5d906080810190606001611b7f565b90505f610a6982610cdb565b905073ffffffffffffffffffffffffffffffffffffffff8216610a9357610a903482611b47565b90505b5f610a9e8989610d25565b9050610aaa8989610e2f565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ae5818b8b85610e9b565b5f83610af086610cdb565b610afa9190611b47565b905073ffffffffffffffffffffffffffffffffffffffff8516610b2457610b218882611b47565b90505b8b811015610b6c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610bc757637939f4245f526004601cfd5b5f60605260405250505050565b6109d28383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611108565b73ffffffffffffffffffffffffffffffffffffffff8216610c4d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065173ffffffffffffffffffffffffffffffffffffffff831682611235565b73ffffffffffffffffffffffffffffffffffffffff8216610cba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109d273ffffffffffffffffffffffffffffffffffffffff8416838361124e565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d1d57610d1873ffffffffffffffffffffffffffffffffffffffff831630611297565b610d1f565b475b92915050565b6060815f8167ffffffffffffffff811115610d4257610d426117dc565b604051908082528060200260200182016040528015610d6b578160200160208202803683370190505b5090505f5f5b83811015610e2457868682818110610d8b57610d8b611d73565b9050602002810190610d9d9190611da0565b610dae906080810190606001611b7f565b9150610db982610cdb565b838281518110610dcb57610dcb611d73565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e1c5734838281518110610e0457610e04611d73565b60200260200101818151610e189190611b47565b9052505b600101610d71565b509095945050505050565b5f5b818110156109d25736838383818110610e4c57610e4c611d73565b9050602002810190610e5e9190611da0565b9050610e7060e0820160c08301611ddc565b15610e9257610e92610e886060830160408401611b7f565b82608001356105c3565b50600101610e31565b60208401516040850151849184918490835f5b818110156110ee57368a8a83818110610ec957610ec9611d73565b9050602002810190610edb9190611da0565b9050610f8a610eed6020830183611b7f565b610efa60a0840184611df5565b610f08916004915f91611e5d565b610f1191611e84565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110a25750610fbe610fa46060830160408401611b7f565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156110125750610fd36020820182611b7f565b73ffffffffffffffffffffffffffffffffffffffff16610ff96040830160208401611b7f565b73ffffffffffffffffffffffffffffffffffffffff1614155b80156110a257506110a061102c6040830160208401611b7f565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b156110d9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b516110e590826112ca565b50600101610eae565b50506110fd858585858561153d565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561122f5773ffffffffffffffffffffffffffffffffffffffff8316611171576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156111e4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112089190611eea565b101561122f5761122f73ffffffffffffffffffffffffffffffffffffffff85168483611754565b50505050565b5f385f3884865af16106515763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661128e576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112e26112da6020830183611b7f565b6017903b1190565b611318576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611357576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61136b610fa46060850160408601611b7f565b611375575f61137b565b82608001355b90505f6113966113916080860160608701611b7f565b610cdb565b9050815f036113cc576113cc6113b26060860160408701611b7f565b6113c26040870160208801611b7f565b8660800135610bd4565b5f806113db6020870187611b7f565b73ffffffffffffffffffffffffffffffffffffffff16846113ff60a0890189611df5565b60405161140d929190611f01565b5f6040518083038185875af1925050503d805f8114611447576040519150601f19603f3d011682016040523d82523d5f602084013e61144c565b606091505b50915091508161145f5761145f816117d2565b5f6114736113916080890160608a01611b7f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886114a460208a018a611b7f565b6114b460608b0160408c01611b7f565b6114c460808c0160608d01611b7f565b8b608001358987116114d657866114e0565b6114e08a88611b47565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261154c600182611b47565b81811061155b5761155b611d73565b905060200281019061156d9190611da0565b61157e906080810190606001611b7f565b90505f5f5f5f5f5f5f5b888110156117445761159b60018a611b47565b811080156115aa575088600114155b15611685578d8d828181106115c1576115c1611d73565b90506020028101906115d39190611da0565b6115e4906080810190606001611b7f565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611685578a818151811061162b5761162b611d73565b602002602001015161163c87610cdb565b6116469190611b47565b965073ffffffffffffffffffffffffffffffffffffffff86161561166a575f61166c565b895b93508387111561168557611685868d61032b878b611b47565b8d8d8281811061169757611697611d73565b90506020028101906116a99190611da0565b6116ba906060810190604001611b7f565b94506116c585610cdb565b925073ffffffffffffffffffffffffffffffffffffffff8516156116e9575f6116eb565b895b9150818311801561172857508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561173c5761173c858d61032b8587611b47565b600101611588565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661128e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661128e57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561182d5761182d6117dc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561187a5761187a6117dc565b604052919050565b5f67ffffffffffffffff82111561189b5761189b6117dc565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f8301126118d6575f5ffd5b81356118e96118e482611882565b611833565b8181528460208386010111156118fd575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461193c575f5ffd5b919050565b8035801515811461193c575f5ffd5b5f6101408284031215611961575f5ffd5b611969611809565b823581529050602082013567ffffffffffffffff811115611988575f5ffd5b611994848285016118c7565b602083015250604082013567ffffffffffffffff8111156119b3575f5ffd5b6119bf848285016118c7565b6040830152506119d160608301611919565b60608201526119e260808301611919565b60808201526119f360a08301611919565b60a082015260c0828101359082015260e08083013590820152611a196101008301611941565b610100820152611a2c6101208301611941565b61012082015292915050565b5f60808284031215611a48575f5ffd5b50919050565b5f5f60a08385031215611a5f575f5ffd5b823567ffffffffffffffff811115611a75575f5ffd5b611a8185828601611950565b925050611a918460208501611a38565b90509250929050565b5f5f5f5f60c08587031215611aad575f5ffd5b843567ffffffffffffffff811115611ac3575f5ffd5b611acf87828801611950565b945050602085013567ffffffffffffffff811115611aeb575f5ffd5b8501601f81018713611afb575f5ffd5b803567ffffffffffffffff811115611b11575f5ffd5b8760208260051b8401011115611b25575f5ffd5b60209190910193509150611b3c8660408701611a38565b905092959194509250565b81810381811115610d1f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611b8f575f5ffd5b611b9882611919565b9392505050565b5f60208284031215611baf575f5ffd5b815167ffffffffffffffff811115611bc5575f5ffd5b8201601f81018413611bd5575f5ffd5b8051611be36118e482611882565b818152856020838501011115611bf7575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611c87610160840182611c14565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611cc28282611c14565b9150506060840151611cec608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d5b61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dd2575f5ffd5b9190910192915050565b5f60208284031215611dec575f5ffd5b611b9882611941565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e28575f5ffd5b83018035915067ffffffffffffffff821115611e42575f5ffd5b602001915036819003821315611e56575f5ffd5b9250929050565b5f5f85851115611e6b575f5ffd5b83861115611e77575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611ee3577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611efa575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212205a55bc06aec0a1355ea24f087fac59a713e4e7ebf63c6ddbbeeb79708befac6364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "AIRLIFT";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
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
        readonly name: "NativeAssetNotSupported";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
