import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EcoFacet, EcoFacetInterface } from "../EcoFacet";
type EcoFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EcoFacet__factory extends ContractFactory {
    constructor(...args: EcoFacetConstructorParams);
    deploy(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EcoFacet>;
    getDeployTransaction(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EcoFacet;
    connect(signer: Signer): EcoFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612c5a380380612c5a83398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051612b9b6100bf5f395f8181604801528181610b3c01528181610c0c0152610c480152612b9b5ff3fe608060405260043610610033575f3560e01c80630ff754ea146100375780637e56b7b0146100935780639e75aa95146100b4575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b34801561009e575f5ffd5b506100b26100ad3660046121d8565b6100c7565b005b6100b26100c236600461223d565b61031b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610213576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610251576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b848061012001511561028f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856102b2816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102e9576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102f387876105ed565b61030587608001518860c001516109a3565b61030f8787610a57565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610396576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103a63447612303565b9050868061010001516103e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104088160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561043f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361047c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88806101200151156104f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961051a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610551576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055b8b896105ed565b5f6105708c5f01518d60c001518d8d33610d78565b90508b60c001518111156105b3575f8c60c001518261058f9190612303565b60808e01519091506105b1906105ab60c08d0160a08e0161233b565b83610eba565b505b6105bd8c8a610a57565b50479350505050818111156105e0576105e05f846105db8585612303565b611004565b50505f9091555050505050565b5f6105fe604083016020840161233b565b73ffffffffffffffffffffffffffffffffffffffff160361064b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61065c60c0830160a0840161233b565b73ffffffffffffffffffffffffffffffffffffffff16036106a9576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b426106ba606083016040840161236d565b67ffffffffffffffff16116106fb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015160e0830151660416edef1601be147fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f73ffffffffffffffffffffffffffffffffffffffff8316016108585780610782576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078c8380612386565b90505f036107c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080830135610801576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61013f6108116060850185612386565b90501461084a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085383611034565b61099d565b6108656060840184612386565b90505f0361089f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80156108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108e56060850185612386565b8101906108f291906125af565b60a081015180519192505f9161090a90600190612303565b8151811061091a5761091a61267c565b60200260200101516020015190505f602482015190508660a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610999576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505b50505050565b805f036109dc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a355780341015610a31576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a3173ffffffffffffffffffffffffffffffffffffffff83163330846110f6565b60c08201515f610a6884848461114e565b90505f6606b2787ad08cbc8560e0015103610a885750632b6653dc610af2565b660416edef1601be8560e0015103610aa5575063536f6c4d610af2565b60e085015167ffffffffffffffff1015610aeb576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5060e08401515b5f610b0a82610b046060880188612386565b866112d4565b90505f6040517f1299d617000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690631299d61790602401602060405180830381865afa158015610b96573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bba91906126d6565b6003811115610bcb57610bcb6126a9565b14610c02576040517fe431e17800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c3186608001517f000000000000000000000000000000000000000000000000000000000000000086611397565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663df00f8fa83610c7b6060890189612386565b875f6040518663ffffffff1660e01b8152600401610c9d959493929190612800565b60408051808303815f875af1158015610cb8573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cdc919061284a565b5050660416edef1601be8660e0015103610d395760e086015186517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b610d228880612386565b604051610d30929190612878565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610d6891906128df565b60405180910390a1505050505050565b5f82808203610db3576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610dc1600185612303565b818110610dd057610dd061267c565b9050602002810190610de291906129f2565b610df390608081019060600161233b565b90505f610dff826113c3565b905073ffffffffffffffffffffffffffffffffffffffff8216610e2957610e263482612303565b90505b5f610e34888861140d565b9050610e408888611517565b610e4d8a89898985611583565b5f82610e58856113c3565b610e629190612303565b905089811015610eac576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610f07576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015610f43575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b15610fde576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af1158015610fba573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061099d9190612a2e565b610fff73ffffffffffffffffffffffffffffffffffffffff841683836117cb565b505050565b73ffffffffffffffffffffffffffffffffffffffff831661102957610fff8282611814565b610fff838383610eba565b60206110408280612386565b905010806110595750602c6110558280612386565b9050115b15611090576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61109e6060830183612386565b6110ae9161011b9160fb91612a49565b6110b791612a70565b905080826080013514610a31576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661114157637939f4245f526004601cfd5b5f60605260405250505050565b6111b26040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6040805160018082528183019092525f91816020015b604080518082019091525f80825260208201528152602001906001900390816111c85790505090506040518060400160405280866080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f815181106112315761123161267c565b60200260200101819052506040518060a0016040528085604001602081019061125a919061236d565b67ffffffffffffffff16815260200161127960c0870160a0880161233b565b73ffffffffffffffffffffffffffffffffffffffff1681526020018560200160208101906112a7919061233b565b73ffffffffffffffffffffffffffffffffffffffff1681525f602082015260400191909152949350505050565b5f5f84846040516112e6929190612aac565b604051809103902090505f836040516020016113029190612abb565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152828252805160209182012060c09a909a1b7fffffffffffffffff000000000000000000000000000000000000000000000000168184015260288301949094526048808301999099528051808303909901895260689091019052508551950194909420949350505050565b610fff8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611881565b5f73ffffffffffffffffffffffffffffffffffffffff8216156114055761140073ffffffffffffffffffffffffffffffffffffffff8316306119a8565b611407565b475b92915050565b6060815f8167ffffffffffffffff81111561142a5761142a611f06565b604051908082528060200260200182016040528015611453578160200160208202803683370190505b5090505f5f5b8381101561150c578686828181106114735761147361267c565b905060200281019061148591906129f2565b61149690608081019060600161233b565b91506114a1826113c3565b8382815181106114b3576114b361267c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661150457348382815181106114ec576114ec61267c565b602002602001018181516115009190612303565b9052505b600101611459565b509095945050505050565b5f5b81811015610fff57368383838181106115345761153461267c565b905060200281019061154691906129f2565b905061155860e0820160c08301612acd565b1561157a5761157a611570606083016040840161233b565b82608001356109a3565b50600101611519565b83838383825f80805b838110156117af57368c8c838181106115a7576115a761267c565b90506020028101906115b991906129f2565b90506115c8602082018261233b565b93506115da604082016020830161233b565b925061167d846115ed60a0840184612386565b6115fb916004915f91612a49565b61160491612ae8565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061176557506116b1611697606083016040840161233b565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156116ea57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611765575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561179c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117a68e826119db565b5060010161158c565b505050506117c0848484845f611c4e565b505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661180b576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff8216611861576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a3173ffffffffffffffffffffffffffffffffffffffff831682611e65565b73ffffffffffffffffffffffffffffffffffffffff84161561099d5773ffffffffffffffffffffffffffffffffffffffff83166118ea576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561195d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119819190612b4e565b101561099d5761099d73ffffffffffffffffffffffffffffffffffffffff85168483611e7e565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6119f36119eb602083018361233b565b6017903b1190565b611a29576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611a68576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611a7c611697606085016040860161233b565b611a86575f611a8c565b82608001355b90505f611aa7611aa2608086016060870161233b565b6113c3565b9050815f03611add57611add611ac3606086016040870161233b565b611ad3604087016020880161233b565b8660800135611397565b5f80611aec602087018761233b565b73ffffffffffffffffffffffffffffffffffffffff1684611b1060a0890189612386565b604051611b1e929190612aac565b5f6040518083038185875af1925050503d805f8114611b58576040519150601f19603f3d011682016040523d82523d5f602084013e611b5d565b606091505b509150915081611b7057611b7081611efc565b5f611b84611aa26080890160608a0161233b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611bb560208a018a61233b565b611bc560608b0160408c0161233b565b611bd560808c0160608d0161233b565b8b60800135898711611be75786611bf1565b611bf18a88612303565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611c5d600182612303565b818110611c6c57611c6c61267c565b9050602002810190611c7e91906129f2565b611c8f90608081019060600161233b565b90505f5f5f5f5f5f5f5b88811015611e5557611cac60018a612303565b81108015611cbb575088600114155b15611d96578d8d82818110611cd257611cd261267c565b9050602002810190611ce491906129f2565b611cf590608081019060600161233b565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611d96578a8181518110611d3c57611d3c61267c565b6020026020010151611d4d876113c3565b611d579190612303565b965073ffffffffffffffffffffffffffffffffffffffff861615611d7b575f611d7d565b895b935083871115611d9657611d96868d6105db878b612303565b8d8d82818110611da857611da861267c565b9050602002810190611dba91906129f2565b611dcb90606081019060400161233b565b9450611dd6856113c3565b925073ffffffffffffffffffffffffffffffffffffffff851615611dfa575f611dfc565b895b91508183118015611e3957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611e4d57611e4d858d6105db8587612303565b600101611c99565b5050505050505050505050505050565b5f385f3884865af1610a315763b12d13eb5f526004601cfd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661180b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661180b57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611f5757611f57611f06565b60405290565b6040805190810167ffffffffffffffff81118282101715611f5757611f57611f06565b60405160c0810167ffffffffffffffff81118282101715611f5757611f57611f06565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fea57611fea611f06565b604052919050565b5f5f67ffffffffffffffff84111561200c5761200c611f06565b50601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200161203f81611fa3565b915050828152838383011115612053575f5ffd5b828260208301375f602084830101529392505050565b5f82601f830112612078575f5ffd5b61208783833560208501611ff2565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146120af575f5ffd5b50565b80356120bd8161208e565b919050565b80151581146120af575f5ffd5b80356120bd816120c2565b5f61014082840312156120eb575f5ffd5b6120f3611f33565b823581529050602082013567ffffffffffffffff811115612112575f5ffd5b61211e84828501612069565b602083015250604082013567ffffffffffffffff81111561213d575f5ffd5b61214984828501612069565b60408301525061215b606083016120b2565b606082015261216c608083016120b2565b608082015261217d60a083016120b2565b60a082015260c0828101359082015260e080830135908201526121a361010083016120cf565b6101008201526121b661012083016120cf565b61012082015292915050565b5f60c082840312156121d2575f5ffd5b50919050565b5f5f604083850312156121e9575f5ffd5b823567ffffffffffffffff8111156121ff575f5ffd5b61220b858286016120da565b925050602083013567ffffffffffffffff811115612227575f5ffd5b612233858286016121c2565b9150509250929050565b5f5f5f5f60608587031215612250575f5ffd5b843567ffffffffffffffff811115612266575f5ffd5b612272878288016120da565b945050602085013567ffffffffffffffff81111561228e575f5ffd5b8501601f8101871361229e575f5ffd5b803567ffffffffffffffff8111156122b4575f5ffd5b8760208260051b84010111156122c8575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156122eb575f5ffd5b6122f7878288016121c2565b91505092959194509250565b81810381811115611407577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6020828403121561234b575f5ffd5b81356120878161208e565b803567ffffffffffffffff811681146120bd575f5ffd5b5f6020828403121561237d575f5ffd5b61208782612356565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123b9575f5ffd5b83018035915067ffffffffffffffff8211156123d3575f5ffd5b6020019150368190038213156123e7575f5ffd5b9250929050565b5f67ffffffffffffffff82111561240757612407611f06565b5060051b60200190565b5f82601f830112612420575f5ffd5b813561243361242e826123ee565b611fa3565b8082825260208201915060208360061b860101925085831115612454575f5ffd5b602085015b8381101561249f5760408188031215612470575f5ffd5b612478611f5d565b81356124838161208e565b8152602082810135818301529084529290920191604001612459565b5095945050505050565b5f82601f8301126124b8575f5ffd5b81356124c661242e826123ee565b8082825260208201915060208360051b8601019250858311156124e7575f5ffd5b602085015b8381101561249f57803567ffffffffffffffff81111561250a575f5ffd5b860160408189037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561253d575f5ffd5b612545611f5d565b60208201356125538161208e565b8152604082013567ffffffffffffffff81111561256e575f5ffd5b60208184010192505088601f830112612585575f5ffd5b61259489833560208501611ff2565b602082015280855250506020830192506020810190506124ec565b5f602082840312156125bf575f5ffd5b813567ffffffffffffffff8111156125d5575f5ffd5b820160c081850312156125e6575f5ffd5b6125ee611f80565b813581526125fe60208301612356565b602082015261260f604083016120b2565b604082015260608281013590820152608082013567ffffffffffffffff811115612637575f5ffd5b61264386828501612411565b60808301525060a082013567ffffffffffffffff811115612662575f5ffd5b61266e868285016124a9565b60a083015250949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f602082840312156126e6575f5ffd5b815160048110612087575f5ffd5b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f60a0830167ffffffffffffffff835116845273ffffffffffffffffffffffffffffffffffffffff602084015116602085015273ffffffffffffffffffffffffffffffffffffffff604084015116604085015260608301516060850152608083015160a0608086015281815180845260c0870191506020830193505f92505b8083101561249f57835173ffffffffffffffffffffffffffffffffffffffff815116835260208101516020840152506040820191506020840193506001830192506127ba565b67ffffffffffffffff86168152608060208201525f6128236080830186886126f4565b8281036040840152612835818661273b565b91505082151560608301529695505050505050565b5f5f6040838503121561285b575f5ffd5b82519150602083015161286d8161208e565b809150509250929050565b602081525f61288b6020830184866126f4565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612906610160840182612893565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526129418282612893565b915050606084015161296b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516129da61012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612a24575f5ffd5b9190910192915050565b5f60208284031215612a3e575f5ffd5b8151612087816120c2565b5f5f85851115612a57575f5ffd5b83861115612a63575f5ffd5b5050820193919092039150565b80356020831015611407577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b818382375f9101908152919050565b602081525f612087602083018461273b565b5f60208284031215612add575f5ffd5b8135612087816120c2565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612b47577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612b5e575f5ffd5b505191905056fea2646970667358221220d03424bfea8499e7ff208bb312ddc848a0134ca18074e15715e59156a2f0c6f964736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_portal";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PORTAL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "solanaATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "IntentAlreadyFunded";
        readonly inputs: readonly [];
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
    static createInterface(): EcoFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EcoFacet;
}
export {};
