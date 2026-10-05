import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiIntentEscrowFacetV2, LiFiIntentEscrowFacetV2Interface } from "../LiFiIntentEscrowFacetV2";
type LiFiIntentEscrowFacetV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiIntentEscrowFacetV2__factory extends ContractFactory {
    constructor(...args: LiFiIntentEscrowFacetV2ConstructorParams);
    deploy(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiIntentEscrowFacetV2>;
    getDeployTransaction(_inputSettler: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiIntentEscrowFacetV2;
    connect(signer: Signer): LiFiIntentEscrowFacetV2__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612a48380380612a4883398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516129906100b85f395f818160480152818161096e0152610b8701526129905ff3fe608060405260043610610033575f3560e01c80636577661f146100375780636d21c5df146100935780637dbcf1d9146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611ef7565b6100bb565b005b6100a66100b6366004611fbd565b6103df565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561014a6060830160408401612022565b5f610155344761206f565b905086806101000151610194576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101b78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361022b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61023c6060880160408901612022565b905073ffffffffffffffffffffffffffffffffffffffff811661028b576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878015801590610309575060808b015173ffffffffffffffffffffffffffffffffffffffff168a8a6102be60018561206f565b8181106102cd576102cd612082565b90506020028101906102df91906120af565b6102f0906080810190606001612022565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610340576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6103558c5f01518d60c001518d8d8761063b565b90505f670de0b6b3a76400006103736101608c016101408d016120eb565b61038f906fffffffffffffffffffffffffffffffff168461211a565b6103999190612131565b60c08e0183905290506103ad8d8b8361077d565b504794505050508282111590506103d2576103d25f846103cd858561206f565b610d41565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161045a576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561046e6060830160408401612022565b5f610479344761206f565b90508461049e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104d5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610512576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610550576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105616060880160408901612022565b73ffffffffffffffffffffffffffffffffffffffff16036105ae576040517f89b30fbf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105c087608001518860c00151610d76565b5f670de0b6b3a76400006105dc61016089016101408a016120eb565b6fffffffffffffffffffffffffffffffff168960c001516105fd919061211a565b6106079190612131565b905061061488888361077d565b504791505081811115610630576106305f846103cd858561206f565b50505f909155505050565b5f82808203610676576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561068460018561206f565b81811061069357610693612082565b90506020028101906106a591906120af565b6106b6906080810190606001612022565b90505f6106c282610e2a565b905073ffffffffffffffffffffffffffffffffffffffff82166106ec576106e9348261206f565b90505b5f6106f78888610e74565b90506107038888610f7e565b6107108a89898985610fea565b5f8261071b85610e2a565b610725919061206f565b90508981101561076f576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b5f61078c610160840184612169565b9050905083610120015115155f82111515146107d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815f0361080d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602083013580610849576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168560a0015173ffffffffffffffffffffffffffffffffffffffff160361090b5781156108cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e085015185516040518381527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361095e565b60a085015173ffffffffffffffffffffffffffffffffffffffff16811461095e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608085015160c0860151610993827f000000000000000000000000000000000000000000000000000000000000000083611232565b60408051602081019091525f81528415610a1c5786359350836109e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87516109f2610160890189612169565b8960200135604051602001610a0a949392919061227b565b60405160208183030381529060405290505b6040805160018082528183019092525f91816020015b610a746040518061010001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f815260200160608152602001606081525090565b815260200190600190039081610a325790505090506040518061010001604052808960e00135815260200189610100013581526020018a60e0015181526020018961012001358152602001888152602001868152602001838152602001610aea8a806101800190610ae59190612410565b61125e565b815250815f81518110610aff57610aff612082565b60209081029190910101526040805160018082528183019092525f91816020015b610b28611c97565b815260200190600190039081610b2057905050905060405180604001604052808673ffffffffffffffffffffffffffffffffffffffff16815260200185815250815f81518110610b7a57610b7a612082565b60200260200101819052507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637515fd56610bdf8773ffffffffffffffffffffffffffffffffffffffff161590565b610be9575f610beb565b855b6040518061010001604052808d6040016020810190610c0a9190612022565b73ffffffffffffffffffffffffffffffffffffffff1681526020018d606001358152602001468152602001610c508e6080016020810190610c4b9190612471565b611393565b63ffffffff168152602001610c718e60a0016020810190610c4b9190612471565b63ffffffff1681526020018d60c0016020810190610c8f9190612022565b73ffffffffffffffffffffffffffffffffffffffff168152602001858152602001868152506040518363ffffffff1660e01b8152600401610cd0919061261e565b5f604051808303818588803b158015610ce7575f5ffd5b505af1158015610cf9573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18a604051610d2d9190612700565b60405180910390a150505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d6b57610d6682826113b9565b505050565b610d66838383611426565b805f03610daf576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e085780341015610e04576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610e0473ffffffffffffffffffffffffffffffffffffffff8316333084611571565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e6c57610e6773ffffffffffffffffffffffffffffffffffffffff8316306115c9565b610e6e565b475b92915050565b6060815f8167ffffffffffffffff811115610e9157610e91611cb5565b604051908082528060200260200182016040528015610eba578160200160208202803683370190505b5090505f5f5b83811015610f7357868682818110610eda57610eda612082565b9050602002810190610eec91906120af565b610efd906080810190606001612022565b9150610f0882610e2a565b838281518110610f1a57610f1a612082565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f6b5734838281518110610f5357610f53612082565b60200260200101818151610f67919061206f565b9052505b600101610ec0565b509095945050505050565b5f5b81811015610d665736838383818110610f9b57610f9b612082565b9050602002810190610fad91906120af565b9050610fbf60e0820160c08301612813565b15610fe157610fe1610fd76060830160408401612022565b8260800135610d76565b50600101610f80565b83838383825f80805b8381101561121657368c8c8381811061100e5761100e612082565b905060200281019061102091906120af565b905061102f6020820182612022565b93506110416040820160208301612022565b92506110e48461105460a0840184612410565b611062916004915f9161282e565b61106b91612855565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806111cc57506111186110fe6060830160408401612022565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561115157508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156111cc575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611203576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61120d8e826115fc565b50600101610ff3565b50505050611227848484845f61186f565b505050505050505050565b610d668383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a86565b60608115806112ae575082825f81811061127a5761127a612082565b9050013560f81c60f81b7effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660e060f81b14155b156112f15782828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250929350610e6e92505050565b602582101561132c576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61133960215f848661282e565b61135b61134a60256021878961282e565b61135391612855565b60e01c611393565b611368856025818961282e565b60405160200161137c9594939291906128bb565b604051602081830303815290604052905092915050565b5f6301e1338063ffffffff8316106113a9575090565b610e6e63ffffffff831642612906565b73ffffffffffffffffffffffffffffffffffffffff8216611406576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0473ffffffffffffffffffffffffffffffffffffffff831682611bad565b73ffffffffffffffffffffffffffffffffffffffff8216611473576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc461480156114af575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15611550576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015611526573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061154a9190612919565b50505050565b610d6673ffffffffffffffffffffffffffffffffffffffff84168383611bc6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166115bc57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61161461160c6020830183612022565b6017903b1190565b61164a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611689576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61169d6110fe6060850160408601612022565b6116a7575f6116ad565b82608001355b90505f6116c86116c36080860160608701612022565b610e2a565b9050815f036116fe576116fe6116e46060860160408701612022565b6116f46040870160208801612022565b8660800135611232565b5f8061170d6020870187612022565b73ffffffffffffffffffffffffffffffffffffffff168461173160a0890189612410565b60405161173f929190612934565b5f6040518083038185875af1925050503d805f8114611779576040519150601f19603f3d011682016040523d82523d5f602084013e61177e565b606091505b5091509150816117915761179181611c0f565b5f6117a56116c36080890160608a01612022565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117d660208a018a612022565b6117e660608b0160408c01612022565b6117f660808c0160608d01612022565b8b608001358987116118085786611812565b6118128a8861206f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261187e60018261206f565b81811061188d5761188d612082565b905060200281019061189f91906120af565b6118b0906080810190606001612022565b90505f5f5f5f5f5f5f5b88811015611a76576118cd60018a61206f565b811080156118dc575088600114155b156119b7578d8d828181106118f3576118f3612082565b905060200281019061190591906120af565b611916906080810190606001612022565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119b7578a818151811061195d5761195d612082565b602002602001015161196e87610e2a565b611978919061206f565b965073ffffffffffffffffffffffffffffffffffffffff86161561199c575f61199e565b895b9350838711156119b7576119b7868d6103cd878b61206f565b8d8d828181106119c9576119c9612082565b90506020028101906119db91906120af565b6119ec906060810190604001612022565b94506119f785610e2a565b925073ffffffffffffffffffffffffffffffffffffffff851615611a1b575f611a1d565b895b91508183118015611a5a57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a6e57611a6e858d6103cd858761206f565b6001016118ba565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84161561154a5773ffffffffffffffffffffffffffffffffffffffff8316611aef576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b62573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b869190612943565b101561154a5761154a73ffffffffffffffffffffffffffffffffffffffff85168483611c19565b5f385f3884865af1610e045763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c06576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c06575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c0657633e3f8f735f526004601cfd5b60405180604001604052806002906020820280368337509192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d0657611d06611cb5565b60405290565b5f82601f830112611d1b575f5ffd5b813567ffffffffffffffff811115611d3557611d35611cb5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d8257611d82611cb5565b604052818152838201602001851015611d99575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611dd8575f5ffd5b919050565b8015158114611dea575f5ffd5b50565b8035611dd881611ddd565b5f6101408284031215611e09575f5ffd5b611e11611ce2565b823581529050602082013567ffffffffffffffff811115611e30575f5ffd5b611e3c84828501611d0c565b602083015250604082013567ffffffffffffffff811115611e5b575f5ffd5b611e6784828501611d0c565b604083015250611e7960608301611db5565b6060820152611e8a60808301611db5565b6080820152611e9b60a08301611db5565b60a082015260c0828101359082015260e08083013590820152611ec16101008301611ded565b610100820152611ed46101208301611ded565b61012082015292915050565b5f6101a08284031215611ef1575f5ffd5b50919050565b5f5f5f5f60608587031215611f0a575f5ffd5b843567ffffffffffffffff811115611f20575f5ffd5b611f2c87828801611df8565b945050602085013567ffffffffffffffff811115611f48575f5ffd5b8501601f81018713611f58575f5ffd5b803567ffffffffffffffff811115611f6e575f5ffd5b8760208260051b8401011115611f82575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611fa5575f5ffd5b611fb187828801611ee0565b91505092959194509250565b5f5f60408385031215611fce575f5ffd5b823567ffffffffffffffff811115611fe4575f5ffd5b611ff085828601611df8565b925050602083013567ffffffffffffffff81111561200c575f5ffd5b61201885828601611ee0565b9150509250929050565b5f60208284031215612032575f5ffd5b61203b82611db5565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610e6e57610e6e612042565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120e1575f5ffd5b9190910192915050565b5f602082840312156120fb575f5ffd5b81356fffffffffffffffffffffffffffffffff8116811461203b575f5ffd5b8082028115828204841417610e6e57610e6e612042565b5f82612164577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261219c575f5ffd5b83018035915067ffffffffffffffff8211156121b6575f5ffd5b6020019150600581901b36038213156121cd575f5ffd5b9250929050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612207575f5ffd5b830160208101925035905067ffffffffffffffff811115612226575f5ffd5b8036038213156121cd575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60608201868352606060208401528085825260808401905060808660051b8501019150865f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21893603015b888210156123fa577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808786030184528235818112612303575f5ffd5b8a0173ffffffffffffffffffffffffffffffffffffffff61232382611db5565b16865273ffffffffffffffffffffffffffffffffffffffff61234760208301611db5565b16602087015273ffffffffffffffffffffffffffffffffffffffff61236e60408301611db5565b16604087015261238060608201611db5565b73ffffffffffffffffffffffffffffffffffffffff166060870152608081810135908701526123b260a08201826121d4565b60e060a08901526123c760e089018284612234565b9150506123d660c08301611ded565b80151560c089015291509550506020938401939290920191600191909101906122c7565b5050505060409290920192909252949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612443575f5ffd5b83018035915067ffffffffffffffff82111561245d575f5ffd5b6020019150368190038213156121cd575f5ffd5b5f60208284031215612481575f5ffd5b813563ffffffff8116811461203b575f5ffd5b5f8151808452602084019350602083015f5b828110156124eb578151865f5b60028110156124d25782518252602092830192909101906001016124b3565b50505060409590950194602091909101906001016124a6565b5093949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b5f82825180855260208501945060208160051b830101602085015f5b83811015612612577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030188528151805184526020810151602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161010060c08601526125df6101008601826124f5565b905060e0820151915084810360e08601526125fa81836124f5565b60209a8b019a9095509390930192505060010161255d565b50909695505050505050565b6020815273ffffffffffffffffffffffffffffffffffffffff825116602082015260208201516040820152604082015160608201525f606083015161266b608084018263ffffffff169052565b50608083015163ffffffff811660a08401525060a083015173ffffffffffffffffffffffffffffffffffffffff811660c08401525060c083015161010060e08401526126bb610120840182612494565b905060e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101008501526126f78282612541565b95945050505050565b60208152815160208201525f602083015161014060408401526127276101608401826124f5565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261276282826124f5565b915050606084015161278c608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516127fb61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612823575f5ffd5b813561203b81611ddd565b5f5f8585111561283c575f5ffd5b83861115612848575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156128b4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b848682375f8582017fffffffff000000000000000000000000000000000000000000000000000000008660e01b168152838560048301375f9301600401928352509095945050505050565b80820180821115610e6e57610e6e612042565b5f60208284031215612929575f5ffd5b815161203b81611ddd565b818382375f9101908152919050565b5f60208284031215612953575f5ffd5b505191905056fea2646970667358221220f3db825e28a2e00d66d62878410ca4e347a1633c2e70b9d957c4aad8d2f354ab64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_inputSettler";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "LIFI_INTENT_ESCROW_SETTLER_V2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaLiFiIntentEscrowV2";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaLiFiIntentEscrowV2";
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
            readonly name: "_lifiIntentData";
            readonly type: "tuple";
            readonly internalType: "struct LiFiIntentEscrowFacetV2.LiFiIntentEscrowDataV2";
            readonly components: readonly [{
                readonly name: "dstCallReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAndRefundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "expires";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "inputOracle";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputOracle";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputSettler";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "dstCallSwapData";
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
                readonly name: "outputContext";
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
        readonly name: "InvalidDepositAndRefundAddress";
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
    static createInterface(): LiFiIntentEscrowFacetV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiIntentEscrowFacetV2;
}
export {};
