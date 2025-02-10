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
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200294138038062002941833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612899620000a860003960008181606001528181610828015281816108cc015261090c01526128996000f3fe6080604052600436106100345760003560e01c80635aef2e80146100395780637766d1ed1461004e5780639f955b8e146100ab575b600080fd5b61004c61004736600461226d565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046122d1565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612390565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610514565b6102b98888610694565b5047915050818111156102db576102db6000846102d68585612390565b6109e9565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103733447612390565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104da8a600001518b60c001518b8b33610a1a565b60c08b01526104e98a88610694565b504791505081811115610506576105066000846102d68585612390565b505060009091555050505050565b8060000361054e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a757803410156105a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061063891906123ca565b905081811015610683576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61068f83333085610b5d565b505050565b600060018360e00151036106aa5750600161077a565b61a4b18360e00151036106bf5750600461077a565b660416edef1601be8360e00151036106d95750600561077a565b6512309ce540018360e00151036106f25750600361077a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f436861696e666c697046616365743a20556e737570706f72746564206465737460448201527f696e6174696f6e20636861696e00000000000000000000000000000000000000606482015260840161067a565b60008360a001516040516020016107bc919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052608085015190915073ffffffffffffffffffffffffffffffffffffffff166108c25760c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd68734590848461085e60208901896123e3565b61086b60208a018a612410565b6040518763ffffffff1660e01b815260040161088b959493929190612533565b6000604051808303818588803b1580156108a457600080fd5b505af11580156108b8573d6000803e3d6000fd5b50505050506109ac565b6108f584608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610d77565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da0838361094060208801886123e3565b608089015160c08a015161095760208b018b612410565b6040518863ffffffff1660e01b8152600401610979979695949392919061257b565b600060405180830381600087803b15801561099357600080fd5b505af11580156109a7573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1846040516109db91906125e7565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a105761068f838383610eae565b61068f8282611030565b600082808203610a56576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610a65600185612390565b818110610a7457610a746126fa565b9050602002810190610a869190612729565b610a97906080810190606001612767565b90506000610aa48261115a565b905073ffffffffffffffffffffffffffffffffffffffff8216610ace57610acb3482612390565b90505b6000610ada8888611213565b9050610ae6888861131f565b610af38a8989898561138c565b600082610aff8561115a565b610b099190612390565b905089811015610b4f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161067a565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610baa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8c91906123ca565b9050610c9a8286868661173e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610d0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d2e91906123ca565b610d389190612390565b14610d6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d9757505050565b73ffffffffffffffffffffffffffffffffffffffff8216610de4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610e59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7d91906123ca565b101561068f5761068f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61181a565b73ffffffffffffffffffffffffffffffffffffffff8316610efb576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610f48576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd991906123ca565b90508082111561101f576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b61102a84848461190a565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661107d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156110c0576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461111a576040519150601f19603f3d011682016040523d82523d6000602084013e61111f565b606091505b505090508061068f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff82161561120b576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156111e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120691906123ca565b61120d565b475b92915050565b60608160008167ffffffffffffffff81111561123157611231612027565b60405190808252806020026020018201604052801561125a578160200160208202803683370190505b5090506000805b838110156113145786868281811061127b5761127b6126fa565b905060200281019061128d9190612729565b61129e906080810190606001612767565b91506112a98261115a565b8382815181106112bb576112bb6126fa565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661130c57348382815181106112f4576112f46126fa565b602002602001018181516113089190612390565b9052505b600101611261565b509095945050505050565b60005b8181101561068f573683838381811061133d5761133d6126fa565b905060200281019061134f9190612729565b905061136160e0820160c08301612782565b15611383576113836113796060830160408401612767565b8260800135610514565b50600101611322565b83838383826001811461165957600085856113a8600185612390565b8181106113b7576113b76126fa565b90506020028101906113c99190612729565b6113da906080810190606001612767565b9050600089815b8181101561158557368d8d838181106113fc576113fc6126fa565b905060200281019061140e9190612729565b905061143d6114236060830160408401612767565b73ffffffffffffffffffffffffffffffffffffffff161590565b806114a057506114a06114566040830160208401612767565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156114b757506114b76114566020830183612767565b801561153c575061153c6114ce60a0830183612410565b6114dd9160049160009161279f565b6114e6916127c9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611572576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61157c8f82611960565b506001016113e1565b505060005b611595600185612390565b8110156116515760008888838181106115b0576115b06126fa565b90506020028101906115c29190612729565b6115d3906080810190606001612767565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146116485785828151811061161a5761161a6126fa565b602002602001015161162b8261115a565b6116359190612390565b92508215611648576116488188856109e9565b5060010161158a565b505050611732565b8760005b8181101561172f57368b8b83818110611678576116786126fa565b905060200281019061168a9190612729565b905061169f6114236060830160408401612767565b806116b857506116b86114566040830160208401612767565b80156116cf57506116cf6114566020830183612767565b80156116e657506116e66114ce60a0830183612410565b61171c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117268d82611960565b5060010161165d565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261102a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c3e565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526118a68482611d4d565b61102a5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526119009085907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611798565b61102a8482611c3e565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611798565b6119766119706020830183612767565b3b151590565b6119ac576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036119ec576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611a016114236060850160408601612767565b611a0c576000611a12565b82608001355b90506000611a2e611a296060860160408701612767565b61115a565b90506000611a45611a296080870160608801612767565b905082600003611a7c57611a7c611a626060870160408801612767565b611a726040880160208901612767565b8760800135610d77565b8460800135821015611ac7576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b600080611ad76020880188612767565b73ffffffffffffffffffffffffffffffffffffffff1685611afb60a08a018a612410565b604051611b09929190612811565b60006040518083038185875af1925050503d8060008114611b46576040519150601f19603f3d011682016040523d82523d6000602084013e611b4b565b606091505b509150915081611b5e57611b5e81611e0e565b6000611b73611a2960808a0160608b01612767565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611ba460208b018b612767565b611bb460608c0160408d01612767565b611bc460808d0160608e01612767565b8c60800135898711611bd65786611be0565b611be08a88612390565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ca0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e189092919063ffffffff16565b9050805160001480611cc1575080806020019051810190611cc19190612821565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611d77919061283e565b6000604051808303816000865af19150503d8060008114611db4576040519150601f19603f3d011682016040523d82523d6000602084013e611db9565b606091505b5091509150818015611de3575080511580611de3575080806020019051810190611de39190612821565b8015611e05575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611e278484600085611e2f565b949350505050565b606082471015611ec1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611eea919061283e565b60006040518083038185875af1925050503d8060008114611f27576040519150601f19603f3d011682016040523d82523d6000602084013e611f2c565b606091505b5091509150611f3d87838387611f48565b979650505050505050565b60608315611fde578251600003611fd75773ffffffffffffffffffffffffffffffffffffffff85163b611fd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611e27565b611e278383815115611ff35781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612850565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561207a5761207a612027565b60405290565b600082601f83011261209157600080fd5b813567ffffffffffffffff808211156120ac576120ac612027565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156120f2576120f2612027565b8160405283815286602085880101111561210b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461214f57600080fd5b919050565b801515811461216257600080fd5b50565b803561214f81612154565b6000610140828403121561218357600080fd5b61218b612056565b905081358152602082013567ffffffffffffffff808211156121ac57600080fd5b6121b885838601612080565b602084015260408401359150808211156121d157600080fd5b506121de84828501612080565b6040830152506121f06060830161212b565b60608201526122016080830161212b565b608082015261221260a0830161212b565b60a082015260c082013560c082015260e082013560e0820152610100612239818401612165565b9082015261012061224b838201612165565b9082015292915050565b60006040828403121561226757600080fd5b50919050565b6000806040838503121561228057600080fd5b823567ffffffffffffffff8082111561229857600080fd5b6122a486838701612170565b935060208501359150808211156122ba57600080fd5b506122c785828601612255565b9150509250929050565b600080600080606085870312156122e757600080fd5b843567ffffffffffffffff808211156122ff57600080fd5b61230b88838901612170565b9550602087013591508082111561232157600080fd5b818701915087601f83011261233557600080fd5b81358181111561234457600080fd5b8860208260051b850101111561235957600080fd5b60208301955080945050604087013591508082111561237757600080fd5b5061238487828801612255565b91505092959194509250565b8181038181111561120d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156123dc57600080fd5b5051919050565b6000602082840312156123f557600080fd5b813563ffffffff8116811461240957600080fd5b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261244557600080fd5b83018035915067ffffffffffffffff82111561246057600080fd5b60200191503681900382131561247557600080fd5b9250929050565b60005b8381101561249757818101518382015260200161247f565b50506000910152565b600081518084526124b881602086016020860161247c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600063ffffffff80881683526080602084015261255360808401886124a0565b8187166040850152838103606085015261256e8186886124ea565b9998505050505050505050565b600063ffffffff808a16835260c0602084015261259b60c084018a6124a0565b818916604085015273ffffffffffffffffffffffffffffffffffffffff8816606085015286608085015283810360a08501526125d88186886124ea565b9b9a5050505050505050505050565b6020815281516020820152600060208301516101408060408501526126106101608501836124a0565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261264b83826124a0565b9250506060850151612675608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126e88187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261275d57600080fd5b9190910192915050565b60006020828403121561277957600080fd5b6124098261212b565b60006020828403121561279457600080fd5b813561240981612154565b600080858511156127af57600080fd5b838611156127bc57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128095780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561283357600080fd5b815161240981612154565b6000825161275d81846020870161247c565b60208152600061240960208301846124a056fea264697066735822122066cad213ca354ebba5cf98d1aeb4bb00c2e2dcf775ede573cc7572ed7cae067264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
