import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_bridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_bridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161226138038061226183398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516121a86100b95f395f81816108be015281816109600152610b2c01526121a85ff3fe608060405260043610610028575f3560e01c80637bf96e0a1461002c578063f66fe51914610041575b5f5ffd5b61003f61003a366004611c8c565b610060565b005b34801561004c575f5ffd5b5061003f61005b366004611d27565b6103bd565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100db576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100eb3447611d61565b90508580610100015161012a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610168576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101ff576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361023c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e0015114610286576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f148015906102f2575060808b015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b15610329576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61034a60405180606001604052806027815260200161214c602791396106a1565b61035e8b5f01518c60c001518c8c33610733565b60c08c01526040805160608101909152602c808252610385919061212060208301396106a1565b61038e8b610876565b50479350505050818111156103b1576103b15f846103ac8585611d61565b610bbf565b50505f90915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561010082015182901561047b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b82806101200151156104b9576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836104dc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610513576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610550576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361058d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e00151146105d7576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608087015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f148015906106435750608087015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b1561067a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068c87608001518860c00151610bf4565b61069587610876565b50505f90935550505050565b610730816040516024016106b59190611de5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052610ca8565b50565b5f8280820361076e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561077c600185611d61565b81811061078b5761078b611dfe565b905060200281019061079d9190611e2b565b6107ae906080810190606001611e67565b90505f6107ba82610cb1565b905073ffffffffffffffffffffffffffffffffffffffff82166107e4576107e13482611d61565b90505b5f6107ef8888610cfb565b90506107fb8888610e05565b6108088a89898985610e71565b5f8261081385610cb1565b61081d9190611d61565b905089811015610868576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6108b46040518060400160405280600b81526020017f73746172744272696467650000000000000000000000000000000000000000008152506106a1565b6108e781608001517f00000000000000000000000000000000000000000000000000000000000000008360c0015161121c565b6109256040518060400160405280601081526020017f73746172744272696467652032323232000000000000000000000000000000008152506106a1565b6109846040518060400160405280600d81526020017f4252494447455f524f55544552000000000000000000000000000000000000008152507f0000000000000000000000000000000000000000000000000000000000000000611248565b6109c76040518060400160405280600e81526020017f73656e64696e67417373657449640000000000000000000000000000000000008152508260800151611248565b610a0a6040518060400160405280600881526020017f72656365697665720000000000000000000000000000000000000000000000008152508260a00151611248565b610a4d6040518060400160405280600981526020017f6d696e416d6f756e7400000000000000000000000000000000000000000000008152508260c001516112d9565b610a8c6040518060400160405280600d81526020017f626c6f636b2e636861696e696400000000000000000000000000000000000000815250466112d9565b610acb6040518060400160405280600c81526020017f626c6f636b2e6e756d6265720000000000000000000000000000000000000000815250436112d9565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd1906064015f604051808303815f87803b158015610b6f575f5ffd5b505af1158015610b81573d5f5f3e3d5ffd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610bb49190611e80565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316610be957610be4828261136a565b505050565b610be48383836113d7565b805f03610c2d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c865780341015610c82576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610c8273ffffffffffffffffffffffffffffffffffffffff8316333084611445565b6107308161149d565b5f73ffffffffffffffffffffffffffffffffffffffff821615610cf357610cee73ffffffffffffffffffffffffffffffffffffffff8316306114bd565b610cf5565b475b92915050565b6060815f8167ffffffffffffffff811115610d1857610d18611a6d565b604051908082528060200260200182016040528015610d41578160200160208202803683370190505b5090505f805b83811015610dfa57868682818110610d6157610d61611dfe565b9050602002810190610d739190611e2b565b610d84906080810190606001611e67565b9150610d8f82610cb1565b838281518110610da157610da1611dfe565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610df25734838281518110610dda57610dda611dfe565b60200260200101818151610dee9190611d61565b9052505b600101610d47565b509095945050505050565b5f5b81811015610be45736838383818110610e2257610e22611dfe565b9050602002810190610e349190611e2b565b9050610e4660e0820160c08301611f93565b15610e6857610e68610e5e6060830160408401611e67565b8260800135610bf4565b50600101610e07565b838383838260018114611138575f8585610e8c600185611d61565b818110610e9b57610e9b611dfe565b9050602002810190610ead9190611e2b565b610ebe906080810190606001611e67565b90505f89815b8181101561106557368d8d83818110610edf57610edf611dfe565b9050602002810190610ef19190611e2b565b9050610f20610f066060830160408401611e67565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f825750610f82610f396040830160208401611e67565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f995750610f99610f396020830183611e67565b801561101c575061101c610fb060a0830183611fac565b610fbe916004915f91612014565b610fc79161203b565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611052576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61105c8f826114f0565b50600101610ec4565b505f90505b611075600185611d61565b811015611130575f88888381811061108f5761108f611dfe565b90506020028101906110a19190611e2b565b6110b2906080810190606001611e67565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611127578582815181106110f9576110f9611dfe565b602002602001015161110a82610cb1565b6111149190611d61565b9250821561112757611127818885610bbf565b5060010161106a565b505050611210565b875f5b8181101561120d57368b8b8381811061115657611156611dfe565b90506020028101906111689190611e2b565b905061117d610f066060830160408401611e67565b806111965750611196610f396040830160208401611e67565b80156111ad57506111ad610f396020830183611e67565b80156111c457506111c4610fb060a0830183611fac565b6111fa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112048d826114f0565b5060010161113b565b50505b50505050505050505050565b610be48383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117c2565b610c82828260405160240161125e9291906120a1565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f319af33300000000000000000000000000000000000000000000000000000000179052610ca8565b610c8282826040516024016112ef9291906120d8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb60e72cc00000000000000000000000000000000000000000000000000000000179052610ca8565b73ffffffffffffffffffffffffffffffffffffffff82166113b7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c8273ffffffffffffffffffffffffffffffffffffffff8316826118ef565b73ffffffffffffffffffffffffffffffffffffffff8216611424576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610be473ffffffffffffffffffffffffffffffffffffffff84168383611908565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661149057637939f4245f526004601cfd5b5f60605260405250505050565b80516a636f6e736f6c652e6c6f67602083015f808483855afa5050505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115056115006020830183611e67565b611951565b61153b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361157a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61158e610f066060850160408601611e67565b611598575f61159e565b82608001355b90505f6115b96115b46060860160408701611e67565b610cb1565b90505f6115cf6115b46080870160608801611e67565b9050825f03611605576116056115eb6060870160408801611e67565b6115fb6040880160208901611e67565b876080013561121c565b8460800135821015611650576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161085f565b5f8061165f6020880188611e67565b73ffffffffffffffffffffffffffffffffffffffff168561168360a08a018a611fac565b6040516116919291906120f9565b5f6040518083038185875af1925050503d805f81146116cb576040519150601f19603f3d011682016040523d82523d5f602084013e6116d0565b606091505b5091509150816116e3576116e3816119e5565b5f6116f76115b460808a0160608b01611e67565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961172860208b018b611e67565b61173860608c0160408d01611e67565b61174860808d0160608e01611e67565b8c6080013589871161175a5786611764565b6117648a88611d61565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118e95773ffffffffffffffffffffffffffffffffffffffff831661182b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561189e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118c29190612108565b10156118e9576118e973ffffffffffffffffffffffffffffffffffffffff851684836119ef565b50505050565b5f385f3884865af1610c825763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611948576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016119dc57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611948575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661194857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611abe57611abe611a6d565b60405290565b5f82601f830112611ad3575f5ffd5b813567ffffffffffffffff811115611aed57611aed611a6d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b3a57611b3a611a6d565b604052818152838201602001851015611b51575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b90575f5ffd5b919050565b80358015158114611b90575f5ffd5b5f6101408284031215611bb5575f5ffd5b611bbd611a9a565b823581529050602082013567ffffffffffffffff811115611bdc575f5ffd5b611be884828501611ac4565b602083015250604082013567ffffffffffffffff811115611c07575f5ffd5b611c1384828501611ac4565b604083015250611c2560608301611b6d565b6060820152611c3660808301611b6d565b6080820152611c4760a08301611b6d565b60a082015260c0828101359082015260e08083013590820152611c6d6101008301611b95565b610100820152611c806101208301611b95565b61012082015292915050565b5f5f5f60408486031215611c9e575f5ffd5b833567ffffffffffffffff811115611cb4575f5ffd5b611cc086828701611ba4565b935050602084013567ffffffffffffffff811115611cdc575f5ffd5b8401601f81018613611cec575f5ffd5b803567ffffffffffffffff811115611d02575f5ffd5b8660208260051b8401011115611d16575f5ffd5b939660209190910195509293505050565b5f60208284031215611d37575f5ffd5b813567ffffffffffffffff811115611d4d575f5ffd5b611d5984828501611ba4565b949350505050565b81810381811115610cf5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f611df76020830184611d99565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e5d575f5ffd5b9190910192915050565b5f60208284031215611e77575f5ffd5b611df782611b6d565b60208152815160208201525f60208301516101406040840152611ea7610160840182611d99565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611ee28282611d99565b9150506060840151611f0c608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f7b61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611fa3575f5ffd5b611df782611b95565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fdf575f5ffd5b83018035915067ffffffffffffffff821115611ff9575f5ffd5b60200191503681900382131561200d575f5ffd5b9250929050565b5f5f85851115612022575f5ffd5b8386111561202e575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561209a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b604081525f6120b36040830185611d99565b905073ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b604081525f6120ea6040830185611d99565b90508260208301529392505050565b818382375f9101908152919050565b5f60208284031215612118575f5ffd5b505191905056fe73776170416e645374617274427269646765546f6b656e73566961476e6f736973427269646765203232323273776170416e645374617274427269646765546f6b656e73566961476e6f736973427269646765a2646970667358221220244e590aef1fa9b5d2e11892275507cb41c66d542efbd11c83afbe85f82a102c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_bridgeRouter";
            readonly type: "address";
            readonly internalType: "contract IGnosisBridgeRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGnosisBridge";
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
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGnosisBridge";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
