import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162002a1638038062002a16833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a05161293e620000d8600039600061066401526000818161063901528181610760015261078b015261293e6000f3fe6080604052600436106100295760003560e01c80634eefe3a51461002e578063ba66bd9a14610043575b600080fd5b61004161003c366004612382565b610056565b005b61004161005136600461242e565b610288565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476124ac565b905086806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102498a600001518b60c001518b8b336104ac565b60c08b01526102588a886105f4565b50479150508181111561027a5761027a60008461027585856124ac565b6108e6565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610303576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031434476124ac565b9050846103398160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610370576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036103ae576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103eb576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610429576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610467576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047988608001518960c0015161091c565b61048388886105f4565b5047915050818111156104a0576104a060008461027585856124ac565b50506000909155505050565b6000828082036104e8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f76001856124ac565b818110610506576105066124bf565b905060200281019061051891906124ee565b61052990608081019060600161252c565b9050600061053682610a92565b905073ffffffffffffffffffffffffffffffffffffffff82166105605761055d34826124ac565b90505b600061056c8888610b4b565b90506105788888610c57565b6105858a89898985610cc4565b60008261059185610a92565b61059b91906124ac565b9050898110156105e6576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff166107565760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169263492289789290917f00000000000000000000000000000000000000000000000000000000000000009083906106936020890189612547565b6106a360408a0160208b01612571565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16815273ffffffffffffffffffffffffffffffffffffffff96871660048201529590941660248601526044850192909252606484015267ffffffffffffffff16608483015263ffffffff1660a482015260c4016000604051808303818588803b15801561073857600080fd5b505af115801561074c573d6000803e3d6000fd5b50505050506108ab565b61078982608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611076565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663492289788360a0015184608001518560c001518660e001518660000160208101906107ec9190612547565b6107fc6040890160208a01612571565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e089901b16815273ffffffffffffffffffffffffffffffffffffffff96871660048201529590941660248601526044850192909252606484015267ffffffffffffffff16608483015263ffffffff1660a482015260c401600060405180830381600087803b15801561089257600080fd5b505af11580156108a6573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516108da9190612605565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109125761090d8383836111b9565b505050565b61090d828261133b565b80600003610956576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109af57803410156109ab576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610a1c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a409190612718565b905081811015610a86576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b61090d83333085611465565b600073ffffffffffffffffffffffffffffffffffffffff821615610b43576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3e9190612718565b610b45565b475b92915050565b60608160008167ffffffffffffffff811115610b6957610b696120fc565b604051908082528060200260200182016040528015610b92578160200160208202803683370190505b5090506000805b83811015610c4c57868682818110610bb357610bb36124bf565b9050602002810190610bc591906124ee565b610bd690608081019060600161252c565b9150610be182610a92565b838281518110610bf357610bf36124bf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c445734838281518110610c2c57610c2c6124bf565b60200260200101818151610c4091906124ac565b9052505b600101610b99565b509095945050505050565b60005b8181101561090d5736838383818110610c7557610c756124bf565b9050602002810190610c8791906124ee565b9050610c9960e0820160c08301612731565b15610cbb57610cbb610cb1606083016040840161252c565b826080013561091c565b50600101610c5a565b838383838260018114610f915760008585610ce06001856124ac565b818110610cef57610cef6124bf565b9050602002810190610d0191906124ee565b610d1290608081019060600161252c565b9050600089815b81811015610ebd57368d8d83818110610d3457610d346124bf565b9050602002810190610d4691906124ee565b9050610d75610d5b606083016040840161252c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610dd85750610dd8610d8e604083016020840161252c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610def5750610def610d8e602083018361252c565b8015610e745750610e74610e0660a083018361274e565b610e15916004916000916127ba565b610e1e916127e4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610eaa576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eb48f8261167f565b50600101610d19565b505060005b610ecd6001856124ac565b811015610f89576000888883818110610ee857610ee86124bf565b9050602002810190610efa91906124ee565b610f0b90608081019060600161252c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f8057858281518110610f5257610f526124bf565b6020026020010151610f6382610a92565b610f6d91906124ac565b92508215610f8057610f808188856108e6565b50600101610ec2565b50505061106a565b8760005b8181101561106757368b8b83818110610fb057610fb06124bf565b9050602002810190610fc291906124ee565b9050610fd7610d5b606083016040840161252c565b80610ff05750610ff0610d8e604083016020840161252c565b80156110075750611007610d8e602083018361252c565b801561101e575061101e610e0660a083018361274e565b611054576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61105e8d8261167f565b50600101610f95565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661109657505050565b73ffffffffffffffffffffffffffffffffffffffff82166110e3576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611158573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061117c9190612718565b101561090d5761118e83836000611995565b61090d83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611995565b73ffffffffffffffffffffffffffffffffffffffff8316611206576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611253576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156112c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112e49190612718565b90508082111561132a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105dd565b611335848484611b95565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611388576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156113cb576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105dd565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611425576040519150601f19603f3d011682016040523d82523d6000602084013e61142a565b606091505b505090508061090d576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff84166114b2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114ff576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611570573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115949190612718565b90506115a282868686611beb565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611612573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116369190612718565b61164091906124ac565b14611677576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b61169561168f602083018361252c565b3b151590565b6116cb576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361170b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611720610d5b606085016040860161252c565b61172b576000611731565b82608001355b9050600061174d611748606086016040870161252c565b610a92565b90506000611764611748608087016060880161252c565b90508260000361179b5761179b611781606087016040880161252c565b611791604088016020890161252c565b8760800135611076565b84608001358210156117e6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105dd565b6000806117f6602088018861252c565b73ffffffffffffffffffffffffffffffffffffffff168561181a60a08a018a61274e565b60405161182892919061282c565b60006040518083038185875af1925050503d8060008114611865576040519150601f19603f3d011682016040523d82523d6000602084013e61186a565b606091505b5091509150816118b557600061187f82611c49565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061283c565b60006118ca61174860808a0160608b0161252c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896118fb60208b018b61252c565b61190b60608c0160408d0161252c565b61191b60808d0160608e0161252c565b8c6080013589871161192d5786611937565b6119378a886124ac565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b801580611a3557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611a0f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a339190612718565b155b611ac1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105dd565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261090d9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611cc7565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261090d9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611b13565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113359085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611b13565b6060604482511015611c8e57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611caa6004808551611ca291906124ac565b859190611dd3565b905080806020019051810190611cc0919061284f565b9392505050565b6000611d29826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611eed9092919063ffffffff16565b80519091501561090d5780806020019051810190611d4791906128c6565b61090d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105dd565b606081611de181601f6128e3565b1015611e19576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e2382846128e3565b84511015611e5d576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611e7c5760405191506000825260208201604052611ee4565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611eb5578051835260209283019201611e9d565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611efc8484600085611f04565b949350505050565b606082471015611f96576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105dd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fbf91906128f6565b60006040518083038185875af1925050503d8060008114611ffc576040519150601f19603f3d011682016040523d82523d6000602084013e612001565b606091505b50915091506120128783838761201d565b979650505050505050565b606083156120b35782516000036120ac5773ffffffffffffffffffffffffffffffffffffffff85163b6120ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105dd565b5081611efc565b611efc83838151156120c85781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dd919061283c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561214f5761214f6120fc565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561219c5761219c6120fc565b604052919050565b600067ffffffffffffffff8211156121be576121be6120fc565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126121fb57600080fd5b813561220e612209826121a4565b612155565b81815284602083860101111561222357600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461226457600080fd5b919050565b801515811461227757600080fd5b50565b803561226481612269565b6000610140828403121561229857600080fd5b6122a061212b565b905081358152602082013567ffffffffffffffff808211156122c157600080fd5b6122cd858386016121ea565b602084015260408401359150808211156122e657600080fd5b506122f3848285016121ea565b60408301525061230560608301612240565b606082015261231660808301612240565b608082015261232760a08301612240565b60a082015260c082013560c082015260e082013560e082015261010061234e81840161227a565b9082015261012061236083820161227a565b9082015292915050565b60006040828403121561237c57600080fd5b50919050565b6000806000806080858703121561239857600080fd5b843567ffffffffffffffff808211156123b057600080fd5b6123bc88838901612285565b955060208701359150808211156123d257600080fd5b818701915087601f8301126123e657600080fd5b8135818111156123f557600080fd5b8860208260051b850101111561240a57600080fd5b602083019550809450505050612423866040870161236a565b905092959194509250565b6000806060838503121561244157600080fd5b823567ffffffffffffffff81111561245857600080fd5b61246485828601612285565b925050612474846020850161236a565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610b4557610b4561247d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261252257600080fd5b9190910192915050565b60006020828403121561253e57600080fd5b611cc082612240565b60006020828403121561255957600080fd5b813567ffffffffffffffff81168114611cc057600080fd5b60006020828403121561258357600080fd5b813563ffffffff81168114611cc057600080fd5b60005b838110156125b257818101518382015260200161259a565b50506000910152565b600081518084526125d3816020860160208601612597565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261262e6101608501836125bb565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261266983826125bb565b9250506060850151612693608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127068187018315159052565b90950151151593019290925250919050565b60006020828403121561272a57600080fd5b5051919050565b60006020828403121561274357600080fd5b8135611cc081612269565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261278357600080fd5b83018035915067ffffffffffffffff82111561279e57600080fd5b6020019150368190038213156127b357600080fd5b9250929050565b600080858511156127ca57600080fd5b838611156127d757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128245780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611cc060208301846125bb565b60006020828403121561286157600080fd5b815167ffffffffffffffff81111561287857600080fd5b8201601f8101841361288957600080fd5b8051612897612209826121a4565b8181528560208385010111156128ac57600080fd5b6128bd826020830160208601612597565b95945050505050565b6000602082840312156128d857600080fd5b8151611cc081612269565b80820180821115610b4557610b4561247d565b6000825161252281846020870161259756fea264697066735822122091079e3cf917d359372370427fc8be0f3c5b819afa14a746ab4409bbe74313b864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IAcrossSpokePool";
            readonly name: "_spokePool";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_wrappedNative";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaAcross";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint64";
                readonly name: "relayerFeePct";
                readonly type: "uint64";
            }, {
                readonly internalType: "uint32";
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
            }];
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly name: "_acrossData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaAcross";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
