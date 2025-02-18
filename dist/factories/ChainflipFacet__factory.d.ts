import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
declare type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002c1c38038062002c1c833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612b66620000b660003960008181606001528181610813015281816108e1015281816109510152818161099c0152610a700152612b666000f3fe6080604052600436106100345760003560e01c8063490553b2146100395780637766d1ed1461004e578063f8458d6b146100ab575b600080fd5b61004c610047366004612457565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046124bb565b6102a8565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a344761257a565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61027187608001518860c00151610496565b61027b8787610616565b504790508181111561029c5761029c600084610297858561257a565b610b53565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610323576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610334344761257a565b905086806101000151610373576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103968160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103cd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361040b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610448576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61045d89600001518a60c001518a8a33610b84565b60c08a015261046c8987610616565b504790508181111561048857610488600084610297858561257a565b505060009091555050505050565b806000036104d0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105295780341015610525576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610596573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ba91906125b4565b905081811015610605576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61061183333085610cc7565b505050565b60006106258360e00151610ee1565b905060607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff16036107285782356106ac576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604080518435602082015201604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905260e0860151865186358452919350917f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a361077a565b8360a00151604051602001610768919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405290505b600061078960408501856125cd565b90501115158461012001511515146107cd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608084015173ffffffffffffffffffffffffffffffffffffffff1661094757836101200151156108c55760c084015173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906307933dd290848461084c6040890160208a01612639565b61085960408a018a6125cd565b60608b013561086b60808d018d6125cd565b6040518a63ffffffff1660e01b815260040161088e98979695949392919061271d565b6000604051808303818588803b1580156108a757600080fd5b505af11580156108bb573d6000803e3d6000fd5b5050505050610b16565b60c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd68734590848461091a6040890160208a01612639565b61092760808a018a6125cd565b6040518763ffffffff1660e01b815260040161088e959493929190612783565b61097a84608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610f66565b83610120015115610a595773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663bbddc2fb83836109d36040880160208901612639565b6109e060408901896125cd565b6080808c015160c08d015160608d0135926109fd908e018e6125cd565b6040518b63ffffffff1660e01b8152600401610a229a999897969594939291906127cb565b600060405180830381600087803b158015610a3c57600080fd5b505af1158015610a50573d6000803e3d6000fd5b50505050610b16565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08383610aa76040880160208901612639565b88608001518960c00151898060800190610ac191906125cd565b6040518863ffffffff1660e01b8152600401610ae39796959493929190612857565b600060405180830381600087803b158015610afd57600080fd5b505af1158015610b11573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610b4591906128b4565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610b7a5761061183838361109d565b610611828261121f565b600082808203610bc0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610bcf60018561257a565b818110610bde57610bde6129c7565b9050602002810190610bf091906129f6565b610c01906080810190606001612a34565b90506000610c0e82611349565b905073ffffffffffffffffffffffffffffffffffffffff8216610c3857610c35348261257a565b90505b6000610c448888611402565b9050610c50888861150e565b610c5d8a8989898561157b565b600082610c6985611349565b610c73919061257a565b905089811015610cb9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016105fc565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610d14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610dd2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df691906125b4565b9050610e048286868661192d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9891906125b4565b610ea2919061257a565b14610ed9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b600060018203610ef357506001919050565b61a4b18203610f0457506004919050565b660416edef1601be8203610f1a57506005919050565b6512309ce540018203610f2f57506003919050565b6040517f63b7b64100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff8316610f8657505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fd3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611048573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106c91906125b4565b10156106115761061183837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a09565b73ffffffffffffffffffffffffffffffffffffffff83166110ea576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611137576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156111a4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c891906125b4565b90508082111561120e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105fc565b611219848484611af9565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661126c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156112af576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105fc565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611309576040519150601f19603f3d011682016040523d82523d6000602084013e61130e565b606091505b5050905080610611576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156113fa576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156113d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f591906125b4565b6113fc565b475b92915050565b60608160008167ffffffffffffffff81111561142057611420612216565b604051908082528060200260200182016040528015611449578160200160208202803683370190505b5090506000805b838110156115035786868281811061146a5761146a6129c7565b905060200281019061147c91906129f6565b61148d906080810190606001612a34565b915061149882611349565b8382815181106114aa576114aa6129c7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166114fb57348382815181106114e3576114e36129c7565b602002602001018181516114f7919061257a565b9052505b600101611450565b509095945050505050565b60005b81811015610611573683838381811061152c5761152c6129c7565b905060200281019061153e91906129f6565b905061155060e0820160c08301612a4f565b15611572576115726115686060830160408401612a34565b8260800135610496565b50600101611511565b838383838260018114611848576000858561159760018561257a565b8181106115a6576115a66129c7565b90506020028101906115b891906129f6565b6115c9906080810190606001612a34565b9050600089815b8181101561177457368d8d838181106115eb576115eb6129c7565b90506020028101906115fd91906129f6565b905061162c6116126060830160408401612a34565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061168f575061168f6116456040830160208401612a34565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116a657506116a66116456020830183612a34565b801561172b575061172b6116bd60a08301836125cd565b6116cc91600491600091612a6c565b6116d591612a96565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611761576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61176b8f82611b4f565b506001016115d0565b505060005b61178460018561257a565b81101561184057600088888381811061179f5761179f6129c7565b90506020028101906117b191906129f6565b6117c2906080810190606001612a34565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461183757858281518110611809576118096129c7565b602002602001015161181a82611349565b611824919061257a565b9250821561183757611837818885610b53565b50600101611779565b505050611921565b8760005b8181101561191e57368b8b83818110611867576118676129c7565b905060200281019061187991906129f6565b905061188e6116126060830160408401612a34565b806118a757506118a76116456040830160208401612a34565b80156118be57506118be6116456020830183612a34565b80156118d557506118d56116bd60a08301836125cd565b61190b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6119158d82611b4f565b5060010161184c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112199085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e2d565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611a958482611f3c565b6112195760405173ffffffffffffffffffffffffffffffffffffffff8416602482015260006044820152611aef9085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611987565b6112198482611e2d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106119084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611987565b611b65611b5f6020830183612a34565b3b151590565b611b9b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611bdb576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611bf06116126060850160408601612a34565b611bfb576000611c01565b82608001355b90506000611c1d611c186060860160408701612a34565b611349565b90506000611c34611c186080870160608801612a34565b905082600003611c6b57611c6b611c516060870160408801612a34565b611c616040880160208901612a34565b8760800135610f66565b8460800135821015611cb6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105fc565b600080611cc66020880188612a34565b73ffffffffffffffffffffffffffffffffffffffff1685611cea60a08a018a6125cd565b604051611cf8929190612ade565b60006040518083038185875af1925050503d8060008114611d35576040519150601f19603f3d011682016040523d82523d6000602084013e611d3a565b606091505b509150915081611d4d57611d4d81611ffd565b6000611d62611c1860808a0160608b01612a34565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611d9360208b018b612a34565b611da360608c0160408d01612a34565b611db360808d0160608e01612a34565b8c60800135898711611dc55786611dcf565b611dcf8a8861257a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611e8f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120079092919063ffffffff16565b9050805160001480611eb0575080806020019051810190611eb09190612aee565b610611576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fc565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611f669190612b0b565b6000604051808303816000865af19150503d8060008114611fa3576040519150601f19603f3d011682016040523d82523d6000602084013e611fa8565b606091505b5091509150818015611fd2575080511580611fd2575080806020019051810190611fd29190612aee565b8015611ff4575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060612016848460008561201e565b949350505050565b6060824710156120b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fc565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120d99190612b0b565b60006040518083038185875af1925050503d8060008114612116576040519150601f19603f3d011682016040523d82523d6000602084013e61211b565b606091505b509150915061212c87838387612137565b979650505050505050565b606083156121cd5782516000036121c65773ffffffffffffffffffffffffffffffffffffffff85163b6121c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fc565b5081612016565b61201683838151156121e25781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fc9190612b1d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561226957612269612216565b60405290565b600082601f83011261228057600080fd5b813567ffffffffffffffff8082111561229b5761229b612216565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156122e1576122e1612216565b816040528381528660208588010111156122fa57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f6157600080fd5b801515811461234c57600080fd5b50565b8035610f618161233e565b6000610140828403121561236d57600080fd5b612375612245565b905081358152602082013567ffffffffffffffff8082111561239657600080fd5b6123a28583860161226f565b602084015260408401359150808211156123bb57600080fd5b506123c88482850161226f565b6040830152506123da6060830161231a565b60608201526123eb6080830161231a565b60808201526123fc60a0830161231a565b60a082015260c082013560c082015260e082013560e082015261010061242381840161234f565b9082015261012061243583820161234f565b9082015292915050565b600060a0828403121561245157600080fd5b50919050565b6000806040838503121561246a57600080fd5b823567ffffffffffffffff8082111561248257600080fd5b61248e8683870161235a565b935060208501359150808211156124a457600080fd5b506124b18582860161243f565b9150509250929050565b600080600080606085870312156124d157600080fd5b843567ffffffffffffffff808211156124e957600080fd5b6124f58883890161235a565b9550602087013591508082111561250b57600080fd5b818701915087601f83011261251f57600080fd5b81358181111561252e57600080fd5b8860208260051b850101111561254357600080fd5b60208301955080945050604087013591508082111561256157600080fd5b5061256e8782880161243f565b91505092959194509250565b818103818111156113fc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156125c657600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261260257600080fd5b83018035915067ffffffffffffffff82111561261d57600080fd5b60200191503681900382131561263257600080fd5b9250929050565b60006020828403121561264b57600080fd5b813563ffffffff8116811461265f57600080fd5b9392505050565b60005b83811015612681578181015183820152602001612669565b50506000910152565b600081518084526126a2816020860160208601612666565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600063ffffffff808b16835260c0602084015261273d60c084018b61268a565b818a166040850152838103606085015261275881898b6126d4565b91505085608084015282810360a08401526127748185876126d4565b9b9a5050505050505050505050565b600063ffffffff8088168352608060208401526127a3608084018861268a565b818716604085015283810360608501526127be8186886126d4565b9998505050505050505050565b600061010063ffffffff808e1684528160208501526127ec8285018e61268a565b908c16604085015283810360608501529050612809818a8c6126d4565b905087608084015273ffffffffffffffffffffffffffffffffffffffff871660a08401528560c084015282810360e08401526128468185876126d4565b9d9c50505050505050505050505050565b600063ffffffff808a16835260c0602084015261287760c084018a61268a565b818916604085015273ffffffffffffffffffffffffffffffffffffffff8816606085015286608085015283810360a08501526127748186886126d4565b6020815281516020820152600060208301516101408060408501526128dd61016085018361268a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612918838261268a565b9250506060850151612942608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129b58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a2a57600080fd5b9190910192915050565b600060208284031215612a4657600080fd5b61265f8261231a565b600060208284031215612a6157600080fd5b813561265f8161233e565b60008085851115612a7c57600080fd5b83861115612a8957600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612ad65780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215612b0057600080fd5b815161265f8161233e565b60008251612a2a818460208701612666565b60208152600061265f602083018461268a56fea2646970667358221220d49fd5b0638d2d51b0d9ec2241e670f2f6e097923c437c2e8c2a14154fb6608c64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IChainflipVault";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "gasAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnsupportedChainflipChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
