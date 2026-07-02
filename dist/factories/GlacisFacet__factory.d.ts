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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611fe7380380611fe783398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611f2f6100b85f395f8181607001528181610810015261085f0152611f2f5ff3fe608060405260043610610033575f3560e01c80636f9206ba146100375780639c4b6dd91461004c578063bbbf77d51461005f575b5f5ffd5b61004a610045366004611a37565b6100bb565b005b61004a61005a366004611a83565b61033b565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611b30565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e8989610677565b50479250505081811115610330576103305f8461032b8585611b30565b6109ad565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611b30565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d604001356109e2565b60c08c01526105998b89610677565b504792505050818111156105b6576105b65f8461032b8585611b30565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065173ffffffffffffffffffffffffffffffffffffffff8316333084610b7c565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff160361073a5780356106fa576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e08201518251604051833581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36107a8565b805f01355f1c73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16146107a8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107b96040830160208401611b68565b73ffffffffffffffffffffffffffffffffffffffff1603610806576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61083982608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610bd4565b608082015160c083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631f9cd527926040860180359387359161089d9060208a01611b68565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff95861660048201526024810194909452604484019290925260648301529091166084820152606085013560a482015260c4015f6040518083038185885af115801561092b573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109719190810190611b88565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516109a19190611c49565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109d7576109d28282610c00565b505050565b6109d2838383610c6d565b5f83808203610a1d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610a2b600185611b30565b818110610a3a57610a3a611d5c565b9050602002810190610a4c9190611d89565b610a5d906080810190606001611b68565b90505f610a6982610cdb565b905073ffffffffffffffffffffffffffffffffffffffff8216610a9357610a903482611b30565b90505b5f610a9e8989610d25565b9050610aaa8989610e2f565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610ae5818b8b85610e9b565b5f83610af086610cdb565b610afa9190611b30565b905073ffffffffffffffffffffffffffffffffffffffff8516610b2457610b218882611b30565b90505b8b811015610b6c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610bc757637939f4245f526004601cfd5b5f60605260405250505050565b6109d28383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6110f1565b73ffffffffffffffffffffffffffffffffffffffff8216610c4d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065173ffffffffffffffffffffffffffffffffffffffff83168261121e565b73ffffffffffffffffffffffffffffffffffffffff8216610cba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109d273ffffffffffffffffffffffffffffffffffffffff84168383611237565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d1d57610d1873ffffffffffffffffffffffffffffffffffffffff831630611280565b610d1f565b475b92915050565b6060815f8167ffffffffffffffff811115610d4257610d426117c5565b604051908082528060200260200182016040528015610d6b578160200160208202803683370190505b5090505f5f5b83811015610e2457868682818110610d8b57610d8b611d5c565b9050602002810190610d9d9190611d89565b610dae906080810190606001611b68565b9150610db982610cdb565b838281518110610dcb57610dcb611d5c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e1c5734838281518110610e0457610e04611d5c565b60200260200101818151610e189190611b30565b9052505b600101610d71565b509095945050505050565b5f5b818110156109d25736838383818110610e4c57610e4c611d5c565b9050602002810190610e5e9190611d89565b9050610e7060e0820160c08301611dc5565b15610e9257610e92610e886060830160408401611b68565b82608001356105c3565b50600101610e31565b60208401516040850151849184918490835f80805b838110156110d557368c8c83818110610ecb57610ecb611d5c565b9050602002810190610edd9190611d89565b9050610eec6020820182611b68565b9350610efe6040820160208301611b68565b9250610fa184610f1160a0840184611dde565b610f1f916004915f91611e46565b610f2891611e6d565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806110895750610fd5610fbb6060830160408401611b68565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561100e57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611089575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156110c0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8d516110cc90826112b3565b50600101610eb0565b505050506110e68585858585611526565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112185773ffffffffffffffffffffffffffffffffffffffff831661115a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156111cd573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111f19190611ed3565b10156112185761121873ffffffffffffffffffffffffffffffffffffffff8516848361173d565b50505050565b5f385f3884865af16106515763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611277576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112cb6112c36020830183611b68565b6017903b1190565b611301576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611340576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611354610fbb6060850160408601611b68565b61135e575f611364565b82608001355b90505f61137f61137a6080860160608701611b68565b610cdb565b9050815f036113b5576113b561139b6060860160408701611b68565b6113ab6040870160208801611b68565b8660800135610bd4565b5f806113c46020870187611b68565b73ffffffffffffffffffffffffffffffffffffffff16846113e860a0890189611dde565b6040516113f6929190611eea565b5f6040518083038185875af1925050503d805f8114611430576040519150601f19603f3d011682016040523d82523d5f602084013e611435565b606091505b50915091508161144857611448816117bb565b5f61145c61137a6080890160608a01611b68565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861148d60208a018a611b68565b61149d60608b0160408c01611b68565b6114ad60808c0160608d01611b68565b8b608001358987116114bf57866114c9565b6114c98a88611b30565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611535600182611b30565b81811061154457611544611d5c565b90506020028101906115569190611d89565b611567906080810190606001611b68565b90505f5f5f5f5f5f5f5b8881101561172d5761158460018a611b30565b81108015611593575088600114155b1561166e578d8d828181106115aa576115aa611d5c565b90506020028101906115bc9190611d89565b6115cd906080810190606001611b68565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461166e578a818151811061161457611614611d5c565b602002602001015161162587610cdb565b61162f9190611b30565b965073ffffffffffffffffffffffffffffffffffffffff861615611653575f611655565b895b93508387111561166e5761166e868d61032b878b611b30565b8d8d8281811061168057611680611d5c565b90506020028101906116929190611d89565b6116a3906060810190604001611b68565b94506116ae85610cdb565b925073ffffffffffffffffffffffffffffffffffffffff8516156116d2575f6116d4565b895b9150818311801561171157508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561172557611725858d61032b8587611b30565b600101611571565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611277575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661127757633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611816576118166117c5565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611863576118636117c5565b604052919050565b5f67ffffffffffffffff821115611884576118846117c5565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f8301126118bf575f5ffd5b81356118d26118cd8261186b565b61181c565b8181528460208386010111156118e6575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611925575f5ffd5b919050565b80358015158114611925575f5ffd5b5f610140828403121561194a575f5ffd5b6119526117f2565b823581529050602082013567ffffffffffffffff811115611971575f5ffd5b61197d848285016118b0565b602083015250604082013567ffffffffffffffff81111561199c575f5ffd5b6119a8848285016118b0565b6040830152506119ba60608301611902565b60608201526119cb60808301611902565b60808201526119dc60a08301611902565b60a082015260c0828101359082015260e08083013590820152611a02610100830161192a565b610100820152611a15610120830161192a565b61012082015292915050565b5f60808284031215611a31575f5ffd5b50919050565b5f5f60a08385031215611a48575f5ffd5b823567ffffffffffffffff811115611a5e575f5ffd5b611a6a85828601611939565b925050611a7a8460208501611a21565b90509250929050565b5f5f5f5f60c08587031215611a96575f5ffd5b843567ffffffffffffffff811115611aac575f5ffd5b611ab887828801611939565b945050602085013567ffffffffffffffff811115611ad4575f5ffd5b8501601f81018713611ae4575f5ffd5b803567ffffffffffffffff811115611afa575f5ffd5b8760208260051b8401011115611b0e575f5ffd5b60209190910193509150611b258660408701611a21565b905092959194509250565b81810381811115610d1f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611b78575f5ffd5b611b8182611902565b9392505050565b5f60208284031215611b98575f5ffd5b815167ffffffffffffffff811115611bae575f5ffd5b8201601f81018413611bbe575f5ffd5b8051611bcc6118cd8261186b565b818152856020838501011115611be0575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611c70610160840182611bfd565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611cab8282611bfd565b9150506060840151611cd5608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d4461012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611dbb575f5ffd5b9190910192915050565b5f60208284031215611dd5575f5ffd5b611b818261192a565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e11575f5ffd5b83018035915067ffffffffffffffff821115611e2b575f5ffd5b602001915036819003821315611e3f575f5ffd5b9250929050565b5f5f85851115611e54575f5ffd5b83861115611e60575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611ecc577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611ee3575f5ffd5b5051919050565b818382375f910190815291905056fea2646970667358221220f20fde649425d213840af5aaf3dbeb61b9376f863fa4a1d728aa7d94379e564c64736f6c634300081d0033";
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
